function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

function updateTopcategorie() {

    // Sayfa yüklendiğinde gender alanının durumunu kontrol et

    var url = '/products/admins/categories/selectgenderchange';  // Django view URL'sini buraya girin

    $.ajax({
        url: url,
        type: 'POST',
        data: {'csrfmiddlewaretoken':csrftoken,},
        dataType: 'json',
        success: function(response) {
            // Güncellenmiş veri ile ilgili alanı güncelleme
            var topcategorieHTML = '';  // Yeni topcategorie HTML'i oluşturmak için boş bir değişken

            // Gelen verileri for döngüsüyle dönerek select kısımlarını doldurma
            for (var i = 0; i < response.topcategories.length; i++) {
                var category = response.topcategories[i];  // Kategori verisi
                var optionHTML = '<option value="' + category.pk + '">' + category.categoriename + '</option>';  // Seçenek HTML'i

                topcategorieHTML += optionHTML;  // Yeni topcategorie HTML'ini güncelleme
            }

            // topcategorie alanını güncelleme
            $('#id_topcategorie').html('<option value selected>---------</option>' + topcategorieHTML);
        },
        error: function(xhr, errmsg, err) {
            // Hata durumunda yapılacak işlemler
            console.log(xhr.status + ': ' + xhr.responseText);
        }
    });
}

$(document).ready(function() {
    updateTopcategorie(); // Sayfa yüklendiğinde çalıştır
});
