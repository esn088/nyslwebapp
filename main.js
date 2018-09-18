var app = new Vue({
    el: '#app',
    data: {

        datafutbol: {},
        full_url: "https://api.myjson.com/bins/16kufk",
        arrayname: ["a", "b"],
        optionvalue: "",
        buscador: "",
        homepagina: false,
        login: true,
        game: false,
        game2:false,
    },
    created: function () {

        this.getData()
    },
    methods: {


        changeValue: function () {
            this.optionvalue = document.getElementById("select").value;
        },


        buscadorequipo: function (array) {
            for (i = 0; i < array.length; i++) {
                if (this.optionvalue == array[i].name)
                    console.log(array[i].name)
            }

        },


        changeDisplay: function () {
            this.login = false;
            this.homepagina = true;
        },


        changeDisplayGame: function () {
            this.login = false;
            this.homepagina = false;
            this.game = true;
        },


        changeDisplayGame2: function () {
            this.login = false;
            this.homepagina = false;
            this.game=false
            this.game2= true;
        },


        home: function () {
            this.homepagina = document.getElementById("login").value;
            console.log(this.homepagina);
            return this.homepagina;
        },


        removefunction: function (id) {
            var elem = document.getElementById(id);
            return elem.parentNode.removeChild(elem);
        },


        getData: function () {
            fetch(this.full_url, {

                method: "GET",

            }).then(function (response) {

                if (response.ok) {
                    // add a new promise to the chain
                    return response.json();
                }
                // signal a server error to the chain
                throw new Error(response.statusText);
            }).then(function (json) {
                // equals to .success in JQuery Ajax call
                this.datafutbol = json;
                app.arrayname = this.datafutbol.nysldata.teams;
                console.log(this.datafutbol);
                console.log(app.arrayname);
                //                buscadorequipo(app.arrayname);
                //                app.optionvalue = document.getElementById("select").value;
                //                console.log(app.optionvalue);
                //                app.removefunction("app");




            }).catch(function (error) {
                // called when an error occurs anywhere in the chain
                console.log("Request failed: " + error.message);
            });


        },


    }
})
