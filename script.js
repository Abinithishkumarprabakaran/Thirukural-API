var btn_submit = document.querySelector('.btn-submit')

// function clicking(){
//     var value = document.getElementById('input').value

//     var val = Number(value)

//     console.log('clicking')

//     res_fetching(val)
// }

btn_submit.addEventListener('click', ()=>{
    var value = document.getElementById('input').value

    var val = Number(value)

    if(val <= 1330){
        res_fetching(val)
    }
})

async function res_fetching(val){

    let url = `https://api-thirukkural.vercel.app/api?num=${val}`

    let url_fetch = await fetch(url)

    let res = await url_fetch.json()

    let creating_textfield = document.createElement('div')
    creating_textfield.setAttribute('class','text-field')

    let creating_title_tag = document.createElement('h2')
    creating_title_tag.setAttribute('class','sec-title')
    creating_title_tag.innerText = res.sect_tam

    let creating_chapter = document.createElement('h3')
    creating_chapter.setAttribute('class', 'chap-title')
    creating_chapter.innerText = res.chapgrp_tam

    let creating_line1 = document.createElement('p')
    creating_line1.setAttribute('class', 'line1')
    creating_line1.innerText = res.line1

    let creating_line2 = document.createElement('p')
    creating_line2.setAttribute('class', 'line2')
    creating_line2.innerText = res.line2

    let creating_tamil_label = document.createElement('label')
    creating_tamil_label.innerText = 'Tamil Meaning:'

    let creating_tamil_meaning = document.createElement('p')
    creating_tamil_meaning.setAttribute('class','tamil-meaning')
    creating_tamil_meaning.innerText = res.tam_exp

    let creating_english_label = document.createElement('label')
    creating_english_label.innerText = 'English Meaning:'

    let creating_english_meaning = document.createElement('p')
    creating_english_meaning.setAttribute('class', 'english-meaning')
    creating_english_meaning.innerText = res.eng_exp

    creating_textfield.append(creating_title_tag)
    creating_textfield.append(creating_chapter)
    creating_textfield.append(creating_line1)
    creating_textfield.append(creating_line2)
    creating_textfield.append(creating_tamil_label)
    creating_textfield.append(creating_tamil_meaning)
    creating_textfield.append(creating_english_label)
    creating_textfield.append(creating_english_meaning)

    document.querySelector('body').append(creating_textfield)

}