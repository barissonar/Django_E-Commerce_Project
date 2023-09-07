$(document).ready(function() {
  // <select> elementinin değişiklik olayını dinle
  $(".form-select").change(function() {
    // Seçilen değeri al
    var selectedValue = $(this).val();
    // AJAX isteği yap
    $.ajax({
      url: "/account/orderhistory/", // Sunucu URL'sini buraya girin
      method: "POST", // İstek metodunu burada belirleyin
      data: { selectedvalue: selectedValue, csrfmiddlewaretoken: '{{ csrf_token }}' }, // Gönderilecek veriyi belirtin
      success: function(response) {
        // Başarılı cevap geldiğinde yapılacak işlemler

        var htmlcontent = '';
        for (var i = 0; i < response.length; i++) {
          var order = response[i];
          htmlcontent += `
            <div class="orderhistorycart">
              <div id="topdetail">
                <div class="headerandorder">
                  <h6 class="headersix">Sipariş Tarihi</h6>
                  <p>${order.date}</p>
                </div>
                <div class="headerandorder">
                  <h6 class="headersix">Sipariş No</h6>
                  <p>${order.pk}</p>
                </div>
                <div class="headerandorder">
                  <h6 class="headersix">Sipariş Durumu</h6>`;
          if (order.orderstatus === 1) {
            htmlcontent += `
              <p>
                <i class="fa-solid fa-hourglass-half" style="color: red;"></i>
                <span style="color: red">Onay Bekliyor</span>
              </p>`;
          } else if (order.orderstatus === 2) {
            htmlcontent += `
              <p>
                <i class="fa-solid fa-check" style="color: green;"></i>
                <span style="color: green">Onaylandı</span>
              </p>`;
          } else if (order.orderstatus === 3) {
            htmlcontent += `
              <p>
                <i class="fa-regular fa-rectangle-xmark" style="color:red"></i>
                <span style="color: red">Reddedildi</span>
              </p>`;
          } else if (order.orderstatus === 4) {
            htmlcontent += `
              <p>
                <i class="fa-solid fa-rotate-left" style="color: red"></i>
                <span style="color: red">Geri İade</span>
              </p>`;
          } else if (order.orderstatus === 5) {
            htmlcontent += `
              <p>
                <i class="fa-solid fa-box-open" style="color:green;"></i>
                <span style="color: green">Hazırlanıyor</span>
              </p>`;
          } else if (order.orderstatus === 6) {
            htmlcontent += `
              <p>
                <i class="fa-solid fa-truck-fast" style="color: green;"></i>
                <span style="color: green">Kargolandı</span>
              </p>`;
          } else if (order.orderstatus === 7) {
            htmlcontent += `
              <p>
                <i class="fa-solid fa-people-carry-box" style="color: green"></i>
                <span style="color: green">Teslim Edildi</span>
              </p>`;
          }
          htmlcontent += `
              </div>
              <div class="headerandorder">
                <h6 class="headersix">Sipariş Özeti</h6>
                <p>{{ order.orderdetail.all | length }} Ürün</p>
              </div>
              <div class="headerandorder">
                <h6 class="headersix">Alıcı</h6>
                <p>{{ order.name }} {{ order.surname }}</p>
              </div>
              <div class="headerandorderprice">
                <h6 class="headersix">Tutar</h6>
                <p>{{ order.paymentinformation.totalprice }}</p>
              </div>
              <div class="orderdetail">
                <a href="{% url 'orderhistorydetail' order.pk %}">
                  <button type="button" class="orderdetailbutton">Sipariş Detayı</button>
                </a>
              </div>
              </div>
            `;
             for (var j=0;j < order.items.length;j++){
               items = order.items[j];
               htmlcontent +=`
               <div class="allitems">

<div class="items">
     <div class="item-name">
    <p class="product-brand">${items.product_brand}</p>
    <span class="product-name">${items.product_name}</span>
        </p>
        </div>
    <div class="item-size">
        <p class="product-size">
            Beden: <span>${items.product_color}</span>, <span>${items.product_body}</span> - Adet: <span>${items.product_quantity}</span>
        </p>
    </div>
<div class="item-image">
    <a href=""><img src="${items.product_image}"></a>
</div>

</div>
`;

htmlcontent+=`
</div>
</div>
<br>
            <br>
`;

             }



        }

        // Oluşturulan içeriği ekrana yerleştir
        $(".allcart").html(htmlcontent);
      },
      error: function() {
        // Hata durumunda yapılacak işlemler
        $("#result").html("İstek sırasında bir hata oluştu.");
      }
    });
  });
});
