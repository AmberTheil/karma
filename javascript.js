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
    $("#gorilla_sprite").addClass("gorilla_spis");

    $("#abe_container").on("animationend", abeVred);

}

//Abe bliver vred
function abeVred() {
    console.log("abeVred");

    $("#abe_container").off("animationend", abeVred);

    $("#gorilla_sprite").removeClass("sit_gorilla");
    $("#abe_sprite").removeClass("walk_banana_abe");

    $("#abe_sprite").addClass("abe_vred");
    $("#gorilla_container").on("animationend", gorillaAv);
}

function gorillaAv() {
    console.log("gorillaAv")

    $("#gorilla_container").off("animationend", gorillaAv);

    $("#gorilla_sprite").removeClass("gorilla_spis");
    $("#gorilla_container").removeClass("moving_gorilla");

    $("#gorilla_container").addClass("moving_gorilla2");
    $("#gorilla_sprite").addClass("walk_gorilla");

    $("#skildpadde").addClass("skildpadde_falder");
    $("#skildpadde").show();

    $("#gorilla_container").on("animationend", gorillafaldt);
}

function gorillafaldt() {
    console.log("gorilla er faldet");

    $("#gorilla_container").off("animationend", gorillafaldt);
    $("#gorilla_sprite").removeClass("walk_gorilla");

    $("#gorilla_sprite").addClass("gorilla_faldt");
    $("#gorilla_sprite").addClass("gorilla_faldt");
    $("#gorilla_sprite").addClass("gorilla_cry");

    $("#gorilla_sprite").on("animationend", abeGriner);
}

function abeGriner() {
    console.log("abeGriner");

    $("#gorilla_sprite").off("animationend", abeGriner);
    $("#abe_sprite").removeClass("abe_vred");

    $("#abe_sprite").addClass("abe_griner");

    $("#abe_sprite").on("animationend", abe_plaster);

}

function abe_plaster() {
    console.log("abe plaster");

    $("#abe_sprite").off("animationend", abe_plaster);
    $("#abe_sprite").removeClass("abe_griner");
    $("#gorilla_sprite").removeClass("gorilla_cry");
    $("#gorilla_sprite").removeClass("gorilla_faldt");

    $("#gorilla_sprite").addClass("gorilla_plaster");
    $("#abe_container").addClass("moving_abe2");
    $("#abe_sprite").addClass("walk_abe");
    $("#abe_sprite").addClass("abe_plaster");

    $("#abe_sprite").on("baggrund_ryk");
}

function baggrund_ryk() {
    console.log("baggrund_ryk");

    $("#abe_sprite").off("baggrund_ryk");
    $("#abe_sprite").removeClass("abe_plaster");

    $("#baggrund").addclass("baggrund_moving");


}



function styletile() {

}
