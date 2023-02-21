/* ======================================= [ DATABASE'S ] ======================================= */
const DataBase = {
    Configuration: {
        SiteName: "Hotel Application",        
    },
    Rooms: [
        {
            id: 1,
            img: 'https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg',
            type: 1,
            price: '1200',
            isOrdered: false,
            saledPrice: 0
        },
        {
            id: 2,
            img: 'https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800',
            type: 1,
            price: '1500',
            isOrdered: false,
            saledPrice: 1000
        },
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNy2dHHM6OCEJODCnIHcbak0qQNfM-c-fb5LwhFIoxtTLqFXP7Qe2bfQybMS05dzu4dk&usqp=CAU',
            type: 2,
            price: '1000',
            isOrdered: false,
            saledPrice: 0
        },
        {
            id: 4,
            img: 'https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen.jpg',
            type: 1,
            price: '2000',
            isOrdered: true,
            saledPrice: 0
        },
        {
            id: 5,
            img: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/03/trump-hotel-chicago-illinois-usa.jpg',
            type: 3,
            price: '26000',
            isOrdered: false,
            saledPrice: 23000
        },
    ],
    typeNames: ["Room-only", "Standard", "VIP"],
    orderedRooms: [
        {
            id: 4,
            owner: 'Tester'
        }
    ]
}


/* ======================================= [ FUNCTION'S ] ======================================= */

function printItems() {
    const rooms = DataBase.Rooms;
    rooms.map((room) => printItem(room));
}

function printItem(data) {
    const createItem = document.createElement('div')
    createItem.classList.add('item')
    const createImgDiv = document.createElement('div')
    createImgDiv.classList.add('img')
    
    const createImg = document.createElement('img')
    createImg.src = data.img

    const createTitle = document.createElement('p')
    createTitle.classList.add('title')
    createTitle.innerText = DataBase.typeNames[data.type-1]

    const createPriceBar = document.createElement('div')
    createPriceBar.classList.add('priceBar')

    const createPrice = document.createElement('span')
    createPrice.classList.add('price')
    createPrice.innerText =  `${data.price}$`

    const createPriceSale = document.createElement('span')
    createPriceSale.classList.add('sale')
    createPriceSale.innerText =  `${data.saledPrice}$`

    const createButton = document.createElement('button')
    createButton.innerHTML = "Order"

    const createIsOrdered = document.createElement('button')
    createIsOrdered.classList.add('isOrdered')
    createIsOrdered.innerText = 'Is ordered'


    createImgDiv.appendChild(createImg)
    createPriceBar.appendChild(createPrice)
    const isSaled = data.saledPrice > 0 ? (createPriceBar.appendChild(createPriceSale), createPrice.classList.add('del')) : null

    createItem.appendChild(createImgDiv)
    createItem.appendChild(createTitle)
    createItem.appendChild(createPriceBar)
    const isOrdered = data.isOrdered ? createItem.appendChild(createIsOrdered) : createItem.appendChild(createButton)



    const getItemsClass = document.querySelector('.content .items')
    getItemsClass.appendChild(createItem)
}


function siteBody() {
    const getRoot = document.getElementById('root');
    const content = document.createElement('div');
    content.classList.add('content');

    const h1 = document.createElement('h1');
    h1.innerText = DataBase.Configuration.SiteName;

    const createForm = document.createElement('form');
    const createInput = document.createElement('input');

    createInput.placeholder = 'Search room';

    createForm.classList.add('searchbar');


    const createItems = document.createElement('div');
    createItems.classList.add('items');

    getRoot.appendChild(content);

    content.appendChild(h1)
    content.appendChild(createForm)
    createForm.appendChild(createInput)
    content.appendChild(createItems)

    printItems()
}


function root() {
    document.title = DataBase.Configuration.SiteName;
    siteBody()
}

root()


/* ======================================= [ LOGICAL CODE'S ] ======================================= */

document.querySelectorAll('.item button').forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if(item.classList.contains('isOrdered')) {
            alert('This room is ordered!')
            return
        }

        const renter = prompt("Please, print renter Name and Surname")
        const regex = /^[A-Za-z]{3,}\s+[A-Za-z]{3,}$/

        const isTrue = regex.test(renter) ? (
            
            DataBase.orderedRooms.push({
                id: ++i,
                owner: renter
                
            }),
            item.classList.add("isOrdered"),
            item.innerText = "Is Ordered",
            alert("Congratulations!\nYou successful rent this room :)")
        ) : alert("Error!\n Print your Name and Surname. Example - Joker Trump")
    })
})



/* ======================================= [ OTHER'S ] ======================================= */

console.log("Created by AvoPro")