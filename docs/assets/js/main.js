"use strict";const designBox=document.querySelector(".js-designBox"),colourDropDown=document.querySelector(".js-colour"),designArrow=document.querySelector(".js-designArrow"),rectangleProfile=document.querySelector(".js-rectangle"),titleProfile=document.querySelector(".js-container-tex__title"),titleCircle=document.querySelector(".js-preview-list"),icons=document.querySelector(".js-icons"),inputCircle1=document.querySelector(".js-inputColor1"),inputCircle2=document.querySelector(".js-inputColor2"),inputCircle3=document.querySelector(".js-inputColor3");inputCircle1.addEventListener("click",()=>{console.log("FUCK YES1")}),inputCircle2.addEventListener("click",()=>{console.log("FUCK YES2"),rectangleProfile.classList.remove("colour-1a"),rectangleProfile.classList.add("colour-2a")}),inputCircle3.addEventListener("click",()=>{console.log("FUCK YES3")}),console.log(">> Ready :)");const formTitle=document.querySelector(".js-form-title"),formSection=document.querySelector(".js-form-container");formTitle.addEventListener("click",()=>{formSection.classList.toggle("collapsed")});const arrow2=document.querySelectorAll(".js-arrow");for(const e of arrow2)e.addEventListener("click",()=>{e.classList.toggle("rotate")});