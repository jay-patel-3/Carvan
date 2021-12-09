$(document).ready(function () 
{
    //Horizontal Navigation Buttons
    $("#Carvan_Home_Page_Button").click(function Carvan_Home() {
        window.location.href = "Carvan_Home_Page.html";
    })

    $("#Carvan_About_Us_Button").click(function Carvan_About_Us() {
        window.location.href = "Carvan_About_Us_Page.html";
    })

    $("#Carvan_Car_Brands_Button").click(function Carvan_Brands() {
        window.location.href = "Carvan_Car_Brands_Page.html";
    })

    $("#Carvan_Car_List_Button").click(function Carvan_Car_List() {
        window.location.href = "Carvan_Car_List_Page.html";
    })

    $("#Carvan_Pre-Owned_Button").click(function Carvan_Pre_Owned() {
        window.location.href = "Carvan_Pre-Owned_Page.html";
    })

    $("#Carvan_Contact_Us_Button").click(function Carvan_Contact_Us() {
        window.location.href = "Carvan_Contact_Us_Page.html";
    })

    $("#Carvan_Settings").click(function Settings() {
        window.location.href = "Carvan_Settings_Page.html";
    })






    //Contact Us Buttons (About Us Page)
    $(".contact_us_button").click(function call_us() {
        window.location.href = "https://outlook.live.com";
    })


    



    document.addEventListener("DOMContentLoaded", function()
    {
        //Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
            element.addEventListener('click', function (e) {
            e.stopPropagation();
            });
        })


        // make it as accordion for smaller screens
        if (window.innerWidth < 992) 
        {

            // close all inner dropdowns when parent is closed
            document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
                everydropdown.addEventListener('hidden.bs.dropdown', function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                        // hide every submenu as well
                        everysubmenu.style.display = 'none';
                    });
                })
            });
            
            document.querySelectorAll('.dropdown-menu a').forEach(function(element){
                element.addEventListener('click', function (e) {
        
                    let nextEl = this.nextElementSibling;
                    if(nextEl && nextEl.classList.contains('submenu')) {	
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();
                        console.log(nextEl);
                        if(nextEl.style.display == 'block'){
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }

                    }
                });
            })
        }
    }); 




    //Car Database
    let car = [
        {
            "Image": "Carvan_Images/JSON_Cars/hyundai-sonata.jpg",
            "Name": "Hyundai Sonata",
            "Bodystyle": "Sedan",
            "Price": "45,122",
            "ID": 322
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-kia-sportage.jpg",
            "Name": "2021 Kia Sportage",
            "Bodystyle": "Sedan",
            "Price": "21,385",
            "ID": 376
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-toyota-yaris.jpg",
            "Name": "2020 Toyota Yaris",
            "Bodystyle": "Hatchback",
            "Price": "23,502",
            "NewPrice": "21,151.80",
            "ID": 193
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2018-dodge-challenger-demon.jpg",
            "Name": "2018 Dodge Challenger",
            "Bodystyle": "Sports Car",
            "Price": "30,412",
            "ID": 249
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2022-super-duty-f-350-lariat.webp",
            "Name": "2022 Super Duty F-350",
            "Bodystyle": "Truck",
            "Price": "86,260",
            "ID": 459
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-lexus-ls500.jpg",
            "Name": "2020 Lexus LS 500",
            "Bodystyle": "Sedan",
            "Price": "25,849",
            "ID": 690
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-lexus-rc-300.jpg",
            "Name": "2021 Lexus RC 300 F Sport",
            "Bodystyle": "Coupe",
            "Price": "29,693",
            "ID": 183
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2019-ford-fusion.jpg",
            "Name": "2019 Ford Fusion",
            "Bodystyle": "Sedan",
            "Price": "32,070",
            "ID": 502
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-Nissan-Rouge-Platnum.png",
            "Name": "2021 Platnum Nissan Rouge",
            "Bodystyle": "SUV",
            "Price": "40,291",
            "ID": 129
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-mitsubishi-mirage.jpg",
            "Name": "2020 Mitsubishi Mirage",
            "Bodystyle": "Hatchback",
            "Price": "30,291",
            "NewPrice": "27,261.90",
            "ID": 209
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-neuer-VW-Golf-8.jpg",
            "Name": "2020 Neuer VW Golf 8",
            "Bodystyle": "Sedan",
            "Price": "29,392",
            "ID": 920
        },
        {
            "Image": "Carvan_Images/JSON_Cars/volkswagon-golf.png",
            "Name": "Volkswagen Golf R",
            "Bodystyle": "Hatchback",
            "Price": "20,132",
            "NewPrice": "18,118",
            "ID": 230
        },
        {
            "Image": "Carvan_Images/JSON_Cars/Jeep-Rubicon-Reacon.jpg",
            "Name": "2020 Jeep Wrangler Rubicon",
            "Bodystyle": "Jeep",
            "Price": "39,215",
            "ID": 191
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-ford-bronco.png",
            "Name": "2021 Ford Bronco",
            "Bodystyle": "Jeep",
            "Price": "51,130",
            "ID": 933
        },
        {
            "Image": "Carvan_Images/JSON_Cars/Infiniti-q60.jpg",
            "Name": "2021 Infiniti Q60",
            "Bodystyle": "Coupe",
            "Price": "40,130",
            "ID": 391
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2019-f150-svt-raptor.jpg",
            "Name": "2019 F150 SVT Raptor",
            "Bodystyle": "Truck",
            "Price": "60,120",
            "ID": 504
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2022-gmc-hummer-ev.png",
            "Name": "2022 GMC Hummer EV",
            "Bodystyle": "SUV",
            "Price": "63,235",
            "ID": 294
        },
        {
            "Image": "Carvan_Images/JSON_Cars/kia-forte.jpg",
            "Name": "2020 Kia Forte",
            "Bodystyle": "Sedan",
            "Price": "32,145",
            "ID": 911
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2012-porsche-cayenne.jpg",
            "Name": "2014 Porche Cayenne",
            "Bodystyle": "SUV",
            "Price": "72,239",
            "ID": 717
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-ford-mustang-gt500.jpg",
            "Name": "2021 Ford Mustang GT500",
            "Bodystyle": "Sports Car",
            "Price": "55,713",
            "ID": 320
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021_honda_civic.jfif",
            "Name": "2021 Honda Civic",
            "Bodystyle": "SUV",
            "Price": "21,385",
            "ID": 399
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-mazda-3-g20.jpg",
            "Name": "2021 Mazda 3 G20",
            "Bodystyle": "Sedan",
            "Price": "30,272",
            "ID": 944
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2019-Nissan-370z-Nismo.png",
            "Name": "2019 Nissan 370Z Nismo",
            "Bodystyle": "Sports Car",
            "Price": "101,042",
            "ID": 921
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-Ford-EcoSport.jpg",
            "Name": "2021 Ford EcoSport",
            "Bodystyle": "SUV",
            "Price": "32,497",
            "ID": 479
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-dodge-charger.jpg",
            "Name": "2021 Dodge Charger",
            "Bodystyle": "Sports Car",
            "Price": "44,174",
            "ID": 107
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-lamborghini-urus.jpg",
            "Name": "2021 Lamborghini Urus",
            "Bodystyle": "Coupe",
            "Price": "80,505",
            "ID": 810
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-bmw-x6.jpg",
            "Name": "2020 BMW X6",
            "Bodystyle": "SUV",
            "Price": "58,169",
            "ID": 665
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-audi-a5.jpg",
            "Name": "2020 Audi A5",
            "Bodystyle": "Coupe",
            "Price": "31,032",
            "ID": 480
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-mercedes-benz-glc-300.jpg",
            "Name": "2020 Mercedes-Benz GLC300",
            "Bodystyle": "SUV",
            "Price": "40,342",
            "ID": 477
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2021-sierra-1500-denali-hunter-metallic.webp",
            "Name": "2021 Sierra 1500",
            "Bodystyle": "Truck",
            "Price": "70,210",
            "ID": 492
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2015-ford-focus.jpg",
            "Name": "2015 Ford Focus",
            "Bodystyle": "Hatchback",
            "Price": "34,493",
            "NewPrice": "31,043",
            "ID": 243
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-toyota-supra.png",
            "Name": "2020 Toyota Supra",
            "Bodystyle": "Coupe",
            "Price": "58,101",
            "ID": 482
        },
        {
            "Image": "Carvan_Images/JSON_Cars/tesla-model-s.jpg",
            "Name": "2020 Tesla Model S",
            "Bodystyle": "Coupe",
            "Price": "62,112",
            "ID": 932
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2020-jaguar-F-Type.jpeg",
            "Name": "2020 Jaguar F-Type",
            "Bodystyle": "Sports Car",
            "Price": "36,295",
            "ID": 400
        },
        {
            "Image": "Carvan_Images/JSON_Cars/mahindra-scorpio.jfif",
            "Name": "2022 Mahindra Scorpio",
            "Bodystyle": "Jeep",
            "Price": "78,235",
            "ID": 991
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2022-tesla-model-x.webp",
            "Name": "2021 Tesla Model S Plaid",
            "Bodystyle": "SUV",
            "Price": "48,122",
            "ID": 665
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2019_ford_f-150_extended-cab-pickup.webp",
            "Name": "2020 Ford F150 Pickup",
            "Bodystyle": "Truck",
            "Price": "53,212",
            "ID": 239
        },
        {
            "Image": "Carvan_Images/JSON_Cars/tremblay-chrysler dodge-jeep-ram.webp",
            "Name": "2019 Tremblay Chrysler",
            "Bodystyle": "Truck",
            "Price": "55,345",
            "ID": 211
        },
        {
            "Image": "Carvan_Images/JSON_Cars/honda_fit_2022_exterior.jpg",
            "Name": "2021 Honda Fit Exterior",
            "Bodystyle": "Hatchback",
            "Price": "25,045",
            "NewPrice": "22,541",
            "ID": 310
        },
        {
            "Image": "Carvan_Images/JSON_Cars/2018-camaro-conversivel-azul.png",
            "Name": "2018 Chevy Camaro Azul",
            "Bodystyle": "Coupe",
            "Price": "66,121",
            "ID": 489
        }
    ]



     //JSON functionality to append a list of cars
     fetch('carvan.json')

     .then(function (response) 
     {
         return response.json();
     })
 
     .then(function (data) 
     {
         appendData(data);
     })
 
     .catch(function (err) 
     {
         console.log('error: ' + err);
     });

  
    $("#btn_filter_all").click(function filter_all()
    {
        let all = car;
        //console.log(all);
        clearData(); //First clear the list from the page.
        appendData(all); //Add cars to the list.
    })
    $("#btn_filter_sedan").click(function filter_sedan()
    {
        let sedans = car.filter(s => s.Bodystyle == "Sedan");
        //console.log(sedans);
        clearData();
        appendData(sedans);
    })

    $("#btn_filter_suv").click(function filter_suv()
    {
        let suv = car.filter(s => s.Bodystyle == "SUV");
        //console.log(suv);
        clearData();
        appendData(suv);
    })

    $("#btn_filter_coupe").click(function filter_coupe()
    {
        let coupe = car.filter(s => s.Bodystyle == "Coupe");
        //console.log(coupe);
        clearData();
        appendData(coupe);
    })

    $("#btn_filter_truck").click(function filter_truck()
    {
        let truck = car.filter(s => s.Bodystyle == "Truck");
        let jeep = car.filter(s => s.Bodystyle == "Jeep");
        //console.log(coupe);
        clearData();
        appendData(truck);
        appendData(jeep);
    })

    $("#btn_filter_sports").click(function filter_sports()
    {
        let sports = car.filter(s => s.Bodystyle == "Sports Car");
        //console.log(sports);
        clearData();
        appendData(sports);

    })
    
    $("#btn_filter_hatchback").click(function filter_hatchback()
    {
        let hatch = car.filter(s => s.Bodystyle == "Hatchback");
        //console.log(hatch);
        clearData();
        appendData(hatch);
    })


    function appendData(Car) 
    {
        var mainContainer = document.getElementById("car-table-body");

        for (var i = 0; i < Car.length; i++) 
        {
            var list = document.createElement("div");
            list.innerHTML = '<div class="car_boxes">'
                + '<img class="cars" src = "' + Car[i].Image + '">' + '<br>' + '<br>'
                + '<b>' + Car[i].Name + '</b>' + '<br>'
                + '<b>' + Car[i].Bodystyle + '</b>' + '<br>'
                + 'Starting at ' + '<b style="color:rgb(0, 0, 100);">' + '$' + Car[i].Price + ' *' + '</b>' + '<br>' + '<br>'
                + '<b>' + 'ID: ' + '</b>' + Car[i].ID + '<br>' + '<br>'
                + '<button id="buy'+Car[i].ID+'" class="buy-btn" value="'+Car[i].ID+'">Buy</button>' + '<br>'
                + '<button id="cart'+Car[i].ID+'" class="cart-btn" value="'+Car[i].ID+'">Add to cart</button>'
                + '</div>'
            mainContainer.appendChild(list)
        }

        //'Buy' and 'Add to cart' buttons
         $(".buy-btn").click(function()
         {
            var buyBtnElement = $(this);
            console.log("buy button for:"+buyBtnElement.val());
            window.location.href = "Carvan_Buy_Item_Page.html";
         });

         $(".cart-btn").click(function()
         {
            var buyBtnElement = $(this);
            console.log("cart btn for:"+buyBtnElement.val());
            window.location.href = "Carvan_Add_To_Cart_Page.html";
         });
    }


     //clear the list of the car from the div.
     function clearData()
     {
        var mainContainer = document.getElementById("car-table-body");
        mainContainer.innerHTML = "";
    }
});



