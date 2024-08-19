'use strict'
// Only change code below this line
function request(num) {
    fetch(`https://reqres.in/api/users?page=${num}`).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);

            let length = res['data'].length;
            //console.log(length);
            for (let i = 0; i < length; i++) {
                const id = res['data'][i]['id'];

                const firstN = res['data'][i]['first_name'];

                const lastN = res['data'][i]['last_name'];
                const email = res['data'][i]['email'];
                let resault = id + " " + firstN + " " + lastN + " " + email;
                let arr = resault.split(' ')
                insert(arr)


                //console.log(arr);
            }


        })
        .catch((e) => {
            return ("error", e);
        })
}
(request(1));

const insert = (array) => {
    const trTag = document.createElement('tr');
    for (let item of array) {
        const tdTag = document.createElement('td');

        tdTag.appendChild(document.createTextNode(item));
        trTag.appendChild(tdTag);
    }

    //<td>Name</td>
    const tbodyTag = document.querySelector("#userList");
    tbodyTag.appendChild(trTag);

}

const btnN = document.createElement("button");
btnN.id = "btnN";
btnN.innerHTML = 1;
document.querySelector(".pagination").appendChild(btnN);
const btnP = document.createElement("button");
btnP.id = "btnP";
btnP.innerHTML = 2;
document.querySelector(".pagination").appendChild(btnP);
let time;
const button = document.querySelector("#btnN");
button.addEventListener('click', () => {
    const check = document.querySelector("#userList").innerHTML = " ";
    if (check === " ") {
        (request(1));
    }

    document.querySelector(".loading").style.display = "block";

    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
    }, 3000)
})

const Prev = document.querySelector("#btnP");
Prev.addEventListener("click", () => {
    document.querySelector(".loading").style.display = "block";
    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
    }, 3000);
    document.querySelector('#userList').innerHTML = " ";
    (request(2));
})