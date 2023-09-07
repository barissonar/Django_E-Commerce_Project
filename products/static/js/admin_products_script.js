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
    var genderSelect = $('#id_gender');
    var parentCategorySelect = $('#id_topcategorie');
    var firstparentcategoryval = parentCategorySelect.val();
    var childCategorySelect = $('#id_subcategorie');
    var firstchildcategoryval = childCategorySelect.val();
    childCategorySelect.prop('disabled',true);
    childCategorySelect.val('');
    parentCategorySelect.val('');
    // Sayfa yüklendiğinde gender alanının durumunu kontrol et
    if (genderSelect.val() === '') {
        parentCategorySelect.prop('disabled', true);

    }
    else {
        parentCategorySelect.prop('disabled', false);
    var selectedGender = genderSelect.val();
    var url = '/products/admins/products/selectgenderchange';  // Django view URL'sini buraya girin

    $.ajax({
        url: url,
        type: 'POST',
        data: {
            'gender': selectedGender,
            'csrfmiddlewaretoken': csrftoken,
        },
        dataType: 'json',
        success: function(response) {
            // Güncellenmiş veri ile ilgili alanı güncelleme
            var topcategorieHTML = '';  // Yeni topcategorie HTML'i oluşturmak için boş bir değişken

            // Gelen verileri for döngüsüyle dönerek select kısımlarını doldurma
            for (var i = 0; i < response.topcategoriebygender.length; i++) {
                var category = response.topcategoriebygender[i];  // Kategori verisi
                var optionHTML = '<option value="' + category.pk + '">' + category.categoriename + '</option>';  // Seçenek HTML'i

                topcategorieHTML += optionHTML;  // Yeni topcategorie HTML'ini güncelleme
            }
            // topcategorie alanını güncelleme

            $('#id_topcategorie').html('<option value selected>---------</option>' + topcategorieHTML);
            if(firstparentcategoryval){
                parentCategorySelect.val(firstparentcategoryval);
                updateSubcategorie();
            }
            if(firstchildcategoryval){
                updateSubcategorie(firstchildcategoryval);
            }
            },
        error: function(xhr, errmsg, err) {
            // Hata durumunda yapılacak işlemler
            console.log(xhr.status + ': ' + xhr.responseText);
        }
    });
    }

}
function updateSubcategorie(firstchildcategoryval){
    var genderSelect = $('#id_gender');
    var parentCategorySelect = $('#id_topcategorie');
    var childCategorySelect = $('#id_subcategorie');
    if (parentCategorySelect.val() === '') {
        childCategorySelect.prop('disabled',true);
        childCategorySelect.val('');
    }
    else {
        childCategorySelect.prop('disabled', false);
        var url = '/products/admins/products/selecttopcategoriechange';
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                'gender': genderSelect.val(),
                'parentcategory':parentCategorySelect.val(),
                'csrfmiddlewaretoken': csrftoken,
            },
            dataType: 'json',
            success: function (response) {
                // Güncellenmiş veri ile ilgili alanı güncelleme
                var subcategorieHTML = '';  // Yeni subcategorie HTML'i oluşturmak için boş bir değişken

                // Gelen verileri for döngüsüyle dönerek select kısımlarını doldurma
                for (var i = 0; i < response.subcategoriebytopcategorie.length; i++) {
                    var category = response.subcategoriebytopcategorie[i];  // Kategori verisi
                    var optionHTML = '<option value="' + category.pk + '">' + category.categoriename + '</option>';  // Seçenek HTML'i

                    subcategorieHTML += optionHTML;  // Yeni topcategorie HTML'ini güncelleme
                }
                // topcategorie alanını güncelleme
                $('#id_subcategorie').html('<option value="" selected>---------</option>' + subcategorieHTML);
               if(firstchildcategoryval){
                   childCategorySelect.val(firstchildcategoryval);
               }
                },
            error: function (xhr, errmsg, err) {
                // Hata durumunda yapılacak işlemler
                console.log(xhr.status + ': ' + xhr.responseText);
            }
        });
    }
}

$(document).ready(function() {
    updateTopcategorie(); // Sayfa yüklendiğinde çalıştır

    $('#products_form').on('change', '#id_gender', function() {
        updateTopcategorie(); // Değişiklik olduğunda çalıştır
    });
    $('#products_form').on('change', '#id_topcategorie', function() {
        updateSubcategorie(); // Değişiklik olduğunda çalıştır
    });
});
