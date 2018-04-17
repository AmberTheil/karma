$(window).on("load", sidenVises);


function sidenVises() {
    console.log("sidenVises")
    //Animation for gorilla kommer ind
    $("#gorilla_container").addClass("moving_gorilla");
    $("#gorilla_sprite").addClass("walk_gorilla");

    $("#abe_container").hide();
    $("#skildpadde").hide();

    $("#gorilla_container").on("animationend", gorillaSit);

}

function gorillaSit() {
    console.log("gorillaSit");

    $("#gorilla_container").off("animationend", gorillaSit);

    $("#gorilla_sprite").removeClass("walk_gorilla");
    $("#gorilla_sprite").addClass("sit_gorilla");

    $("#abe_container").show();

    $("#abe_container").addClass("moving_abe");
    $("#abe_sprite").addClass("walk_banana_abe");

    $("#abe_container").on("animationend", abeVred);

}



//Abe bliver vred
function abeVred() {
    console.log("abeVred");

    $("#abe_container").off("animationend", abeVred);

    $("#abe_sprite").removeClass("walk_banana_abe");

    $("#abe_sprite").addClass("abe_vred");
    $("#gorilla_sprite").addClass("gorilla_spis");

    $("#gorilla_container").on("animationend", gorillaAv);
}

function gorillaAv() {
    console.log("gorillaAv")

    $("#gorilla_container").off("animationend", gorillaAv);

    $("#gorilla_sprite").removeClass("gorilla_spis");

    $("#skildpadde").show();
    $("#gorilla_container").addClass("moving_gorilla2");
    $("#gorilla_sprite").addClass("walk_gorilla");
    $("#skildpadde").addClass("skildpadde_falder");





}
