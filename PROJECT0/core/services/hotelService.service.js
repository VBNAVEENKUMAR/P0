var hotelService = angular.module('hotelService',[]);
hotelService.service('hotelService',[function(){
        var hotels=[
            {
                id: 1,
                name: "Germanus 7⭐",
                city:"Madurai",
                address: "Bye Pass Road Madurai",
                price: '$4000',
                img:"https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
                details: "first hotel"

            
            },
            {
                id: 2,
                city:"Mumbai",
                name: "Paradise 5⭐",
                address: "456 John Road, Erode, Mumbai",
                price: '$5000',
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGM_RbfZR_x2KEqpKX08dPQPtIfy-L1SkBIg&usqp=CAU",
                details: "second hotel"

            },
            {
                id: 3,
                city:"Madurai",
                name: "Manish jkans Hotel",
                address: "90/43 Permbalur India",
                price: '$10000',
                img:"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?cs=srgb&dl=pexels-pixabay-164595.jpg&fm=jpg",
                details: "third hotel"

            },
            {
                id: 4,
                city:"Coimbatore",
                name: "Orbito",
                address: "89 Avinashi Coimbatore",
                price: '$3000',
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7X0QNtEVS7I3lVqaQBSs2uRMlgHcZknBIFco9Sj2IZyTAP3Hd9p92mGPFhKROD6md5yA&usqp=CAU",
                details: "fourth hotel"

            },
            {
                id: 5,
                city:"Rajasthan",
                name: "JOY",
                address: "43 bye pass road Rajasthan",
                price: '$7000',
                img:"https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
                details: "fifth hotel"

            },
            {
                id: 6,
                city:"Bengaluru",
                name: "Vajra",
                address: "23 dollors colony Bengaluru",
                price: '$8000',
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CDzThDazBm0hYG067Sna5u53WPv61bAg_PToT9l-kFFWR_9Snvw5iFuZVANghS5utPI&usqp=CAU",
                details: "sixth hotel"

            },
            {
                id: 7,
                city:"Madurai",
                name: "Agrini",
                address: "Umachikulam Anaiyur, New Delhi",
                price: '$804300',img:"",
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfNiL3gu51iDw2fFPMtS0l7jBFduCXZOxbUdJuP4fXjrMRmvomHbeUzxzFPGEkP-NGvo&usqp=CAU",
                details: "seventh hotel"

            },
            {
                id: 8,
                city:"Pondicherry",
                name: "Vajara Aparna",
                address: "23/32 French colony Pondicherry",
                price: '$83000',
                img:"https://image-tc.galaxy.tf/wijpeg-9vualzt3dbue0hi00ba4q49ub/chatwalhotelnyc-c-004-build-crop.jpg?width=1920",
                details: "eight hotel"

            },
            {
                id: 9,
                city:"Kerala",
                name: "Osi Aparna",
                address: "23/32 Dollors colony Kerala",
                price: '$3000',
                img:"https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
                details: "nine hotel"

            },
            {
                id: 10,
                city:"Ooty",
                name: "Ellis Aparna",
                address: "23/32 Osu colony Ooty",
                price: '$84000',
                img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMzXC5ORcP7R4T0jKVtJca3rE33bIQGs5yk5EQJhDjocnZFJjTi3cU_I-KhaIs3rhsc8&usqp=CAU",
                details: "ten hotel"

            }
        ];
        this.getHotels= function(){
            return hotels;
        }
        this.getId= function(id){
            return hotels.find(function(hotel){
                return hotel.id == id;
            });
        };
        this.getCity= function(id){
            return hotels.find(function(hotel){
               if(hotel.id == id) {
                    return hotel.city;
               }
            });
        };
    }]);