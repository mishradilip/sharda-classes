//
function menuList() {
	console.log('Call');
  $.ajax({
    type: 'GET',
    dataType: 'json',
    async: false,
    url: "https://mishradilip.github.io/sharda-classes/api/menu.json",
    success: function(data) {
      console.log(data.items);
    },
    error: function(xhr) {}
  });
}

menuList();
