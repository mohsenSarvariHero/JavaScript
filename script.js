// let listItems = document.getElementsByClassName('to-do-item');
// // console.log(listItems)

// for(let i=0 ; i<listItems.length;i++ ){
//     console.log(listItems[i])
// }

// //foreach

// Array(listItems).forEach(element => {
//     console.log(element)
// });


// Array.from(listItems).forEach(element => {
//     console.log(element)
// });


// let lists = document.querySelector("#to-do-list");
// Array(lists).forEach(element => {
//     console.log(element)
// });

// let titles = document.querySelectorAll('.title');
// titles.forEach(element => {
//     console.log(element)
// })
// let titles2 = document.querySelector('.title');

// console.log(titles2)


// let li4 = document.querySelectorAll("ul li ");
// li4.forEach(element => {
//     console.log(element)
// });
// let inn = document.querySelectorAll("#myform input[type=text] ");
// inn.forEach(element => {
//     console.log(element)
// });
// let fdg = document.querySelector('#to-do-list')
// console.log(fdg)

// let fdg1 = fdg.parentNode
// console.log(fdg1)
// let fdg2 = fdg1.childNodes
// console.log(fdg2)
// let fdg3 = fdg1.children
// console.log(fdg3)

// let header = document.querySelector("#header-title");
// console.log(header)
// console.log(header.innerHTML)
// console.log(header.innerHTML = "mohsen sarvari")


// let att = document.createAttribute("target");
// att.value = "_blank"

// let linkk = document.querySelector("#ref-link");
// linkk.setAttributeNode(att)

// console.log(document.querySelector("#ref-link"))

// let color1 = document.createAttribute("class");
// color1.value = "red-text";
// console.log(color1);
// let text1 = document.querySelectorAll(".title");
// console.log(text1)
// Array.from(text1).forEach(element => {
//     element.setAttributeNode(color1)
// })
// document.querySelector("#main-title").setAttributeNode(color1)


document.querySelector("#ref-link").setAttribute("class","red-text");
document.querySelector("#ref-link").setAttribute("target","_blank");

//add li 

// let newli = document.createElement("li");
// console.log(newli);

// let textli = document.createTextNode("dummy node fifth create");

// newli.appendChild(textli);


// let ull = document.querySelector("ul");
// ull.appendChild(newli);


// let li2 = document.createElement('li');
// li2.innerHTML = "sixth dummy create";
// ull = document.querySelector("ul");
// ull.appendChild(li2);

// document.querySelector("header h2").className = "red-text"

// console.log(document.querySelector("#ref-link").attributes.getNamedItem("id"));
// console.log(document.querySelector("#ref-link").getAttribute("id"));
// console.log(document.querySelector("#ref-link").getAttribute("href"));
// console.log(document.querySelector("#ref-link").removeAttribute("href"));
// console.log(document.querySelector("#ref-link").getAttribute("href"));

// document.querySelector("#main-title").style.color = "red"
// document.querySelector("#main-title").style = "color : red"
// document.querySelector("#main-title").style.backgroundColor = "blue"

// let classs = document.querySelector("#main-title")
// console.log(classs);

// classs.className = classs.className + " newclass"

// classs = document.querySelector("#main-title")
// console.log(classs);

// console.log(classs.classList)
// classs.classList.add("here")
// console.log(classs);
// classs.classList.toggle("here")
// classs.classList.toggle("here")
// classs.classList.replace("here" , "here2")



// let spann = document.createElement("span");
// spann.className = "to-do-span";
// spann.innerHTML = "sith dummy ceate"
// console.log(spann);

// let newli = document.createElement("li");
// newli.appendChild(spann);
// newli.classList.add("to-do-item");

// let ull = document.querySelector("ul");
// ull.appendChild(newli)


// let myli = document.querySelector("li").cloneNode("true")
// console.log(myli);

// myli.querySelector("span").innerHTML = "hello"
// console.log(myli)

// let ull = document.querySelector("ul");
// ull.appendChild(myli)


// let newlink = document.createElement('a');
// newlink.href = "#"
// newlink.id = "ref-link"
// newlink.innerHTML = "google"
// let old = document.querySelector("#ref-link");
// document.querySelector("footer").replaceChild(newlink,old)


// let ull = document.querySelector("ul");
// let third = ull.children[2];

// ull.insertBefore(newlink,third)

// ull.insertAdjacentElement("afterbegin",newlink)


// document.querySelector("#to-do-list").addEventListener("touchend",(e)=>{
//     console.log(e);
// })

function change(){
    document.querySelector("footer").style.color = "blue"
    document.querySelector("footer").style.backgroundColor = "yellow"
}

document.querySelector("#clicks").addEventListener("click",()=>{
    document.querySelector('header').style.color = "red"
    document.querySelector('header').style.backgroundColor = "green"
    /* window.alert("hi")*/
})
// document.querySelector("#clicks").addEventListener("click","changeHeader")

// function changeHeader(){
//     document.querySelector('header').style.color = "red"
//     document.querySelector('header').style.backgroundColor = "green"
// }



