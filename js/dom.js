/*Al pulsar repartir,
1. se genere el misterio.
2. se agrege cada elemento del array a cada carta (por ejemplo charater.firstName
a personajes).
3. las tres cartas se giren(es decir, darle la propiedad transform:rotate(180deg)
a card). Esto hara que las 3 cartas se den la vuelta
*/
$(function() {

    var check = false;
    $(".repartir").click(function() {
    pickMistery();
    $("#characters .back").html(misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name);
    $("#weapons .back").html(misteryEnvelope[1].name);
    $("#rooms .back").html(misteryEnvelope[2].name);
    $(".card").css({ WebkitTransform: 'rotateY(' + 180 + 'deg)'});
    $(".repartir").html("re-repartir")
    setTimeout(function(){
      $(".card").css({ WebkitTransform: 'rotateY(' + 360 + 'deg)'});
    },2000)
  });


  $(".ocultar").click(function() {

    if (check) {
      $(".card").css({ WebkitTransform: 'rotateY(' + 360 + 'deg)'});
      check = false;
    }
    else {};
  });

  $(".enseñar").click(function() {

    if (check == false) {
      $(".card").css({ WebkitTransform: 'rotateY(' + 180 + 'deg)'});
      check = true;
    }
    else {};
  });
  console.log(check)
});
