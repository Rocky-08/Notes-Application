'use strict'

let button = document.querySelector('.btn')
let note = document.querySelector('.Notes')
let container = document.querySelector('.Notes-container')
let count=0;
let DeleteAll = document.querySelector('.Delete')
let trash = document.querySelector('.fa-trash-o')
let save = document.querySelector('.fa-check-square-o')
let dataArr = [];



button.addEventListener('click',function(e)
{
    e.preventDefault();
    count++;
    
    let html = `
    <div class="note" data-note = ${count}>
    <i class="fa fa-check-square-o"></i>
    <i class="fa fa-remove"></i>
    <i class="fa fa-trash-o"></i>
    <textarea name="note" class="Notes " cols="20" rows="9"></textarea>
    
    </div>
    `;
    
    container.insertAdjacentHTML('beforeend',html);
    
    
    
})


DeleteAll.addEventListener('click', function(e)
{
    e.preventDefault();

    localStorage.removeItem('Note');
    
    container.innerHTML = '';

    dataArr = [];
})

let setLocalStorage = function(text)
{
    localStorage.setItem('Note' , JSON.stringify(text));
}

let getLocalStorage = function()
{
    let data=JSON.parse(localStorage.getItem('Note'));

    data.forEach((element,index) => {

        let html = `
        <div class="note" data-note = ${index}>
        <i class="fa fa-check-square-o"></i>
        <i class="fa fa-remove"></i>
        <i class="fa fa-trash-o"></i>
        <textarea name="note" class="Notes " cols="20" rows="9">${element}</textarea>
        
        </div>
        `;
          
        console.log(data);
        
        /* setLocalStorage(data); */
        dataArr = data;
        

        container.insertAdjacentHTML('beforeend',html);
    })


}

document.addEventListener('click',function(e)
{
/* console.log( ); */
/* console.log(e.target)
  let no = e.target.closest('.note').getAttribute('data-note')
  console.log(no); */

  if(e.target.classList.contains('fa-trash-o'))
  {
      
      e.target.closest('.note').classList.add('hidden');
      let no = e.target.closest('.note').getAttribute('data-note');
      console.log(no);
      let newArr = dataArr.filter((element , index) => index!==Number(no));
      console.log(newArr);

      /* dataArr= newArr; */

      setLocalStorage(newArr)
  }

  
  if(e.target.classList.contains('fa-remove'))
  {
      e.target.closest('.note').lastElementChild.value = '';
      
  }

  if(e.target.classList.contains('fa-check-square-o'))
  {
     let text =   e.target.closest('.note').lastElementChild.value
    
     
     
     dataArr.push(text);
     setLocalStorage(dataArr);
     
     
 }


})

window.addEventListener('load' , getLocalStorage);
    




     
     
  
  


















