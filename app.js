console.clear();

document.addEventListener("DOMContentLoaded",()=>{

let input = document.getElementById("input");
let ul = document.getElementById("unordered-list");
let li = ul.getElementsByTagName("li");
let p = ul.getElementsByTagName("p");


input.addEventListener("keyup",function(){
  
  let inputValue = input.value.toLowerCase()
  
  if (inputValue === "") {
   
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";
    }
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = "block";
    }
} else {

    for (let i = 0; i < li.length; i++) {
        let flavorName = li[i].textContent.toLowerCase();
        if (!flavorName.includes(inputValue)) {
            li[i].style.display = "none";
        } else {
            li[i].style.display = "block";
        }
    }
    
    for (let i = 0; i < p.length; i++) {
        p[i].style.display = "none";
    }
}
});

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

button1.addEventListener("click",function(){
  let total = 0;
  let tax;
  let items =[];
  
  let receiptUl = document.getElementById("Receipt-ul")
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  
  checkboxes.forEach(checkbox=>{
  total+=parseFloat(checkbox.value)
  tax = 16/100 * total;
    
  let listItemText = checkbox.parentNode.textContent;
    // let itemName = listItemText.slice(0, listItemText.lastIndexOf(' ')); // Extract item name
    // items.push(itemName);
    items.push(listItemText)
  })

   items.forEach(item => {
    let myli = document.createElement("li");
    myli.style.listStyle = "none";
    myli.innerText= item;
    receiptUl.appendChild(myli);
  });
  
  document.getElementById("receipt-p").innerText = "Receipt:"

  document.getElementById("Total").innerText = `Total: Ksh.${total.toFixed(2)}`;

  document.getElementById("Tax").innerText = `Tax: Ksh.${tax.toFixed(2)}`;


  document.getElementById("thankyou-message").innerText = "--------------Thank you for shopping with us!--------------";
 
  
  button1.disabled=true;
});

button2.addEventListener("click",()=>{
  button1.disabled = false;
  
  document.getElementById("Receipt-ul").innerHTML="";
  document.getElementById("Total").textContent="";
  document.getElementById("receipt-p").innerText = "";
  document.getElementById("Tax").innerText = "";
  
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  checkboxes.forEach(checkbox=>{
  checkbox.checked = false;
  });
  
document.querySelector("#thankyou-message").innerText="";
})



});