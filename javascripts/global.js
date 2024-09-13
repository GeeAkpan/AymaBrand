import {
    globalConfig
} from "../config/global.config.js"
const navbar = document.querySelector(".navbar-nav")
let menu = document.querySelector("#menu-icon");
export function elementPopulator(className, content) {
    const element = document.querySelector(className)
    element.innerText = content
}
export async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

export async function populateSocialContainer() {
    try {
        const socialEntries = globalConfig.socialLinks
        let socialElement = ``
        for (const entry of socialEntries) {
            socialElement += `<a href="${entry.url || "#"}">${entry.icon}</a>`
        }
        const socialLinksElement = document.querySelectorAll(".social-links")
        socialLinksElement.forEach(element => {
            element.insertAdjacentHTML("afterbegin", socialElement)
        })
    } catch (error) {
        console.error(error)
    }
}

function populateCopyright() {
    try {
        const copyrightElement = document.querySelector(".Copyright-Text")
        copyrightElement.innerHTML = `<a href="${globalConfig.copyright.link || "#"}">${globalConfig.copyright.content || "AYMA"}</a>`
    } catch (error) {
        console.error(error)
    }
}
async function populateNavigator() {
    try {
        const links = await fetchData("/data/nav.json")
        let navElement = ""
        for (const link of links) {
            navElement += `<a href="${link.url}">${link.title}</a>`
        }
        navbar.insertAdjacentHTML("afterbegin", navElement)
    } catch (error) {
        console.error(error)
    }
}
try {
    menu.onclick = () => {
        navbar.classList.toggle("active");
    };
    window.onscroll = () => {
        navbar.classList.remove("active");
    };
} catch (error) {
    console.error(error)
}


populateCopyright()
populateNavigator()