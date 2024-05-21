const tab1 = document.querySelector(".tabContent#onboarding");
const tabSOP3 = document.querySelector(".section#sop3");
const btnSOP3 = document.querySelector(".button#sop3");
const tabSOP4 = document.querySelector(".section#sop4");
const helperSOP4 = document.querySelector(".helper#sop4");
const btnSOP4 = document.querySelector(".button#sop4");
const tabSOP5 = document.querySelector(".section#sop5");
const helperSOP5 = document.querySelector(".helper#sop5");
const btnSOP5 = document.querySelector(".button#sop5");

const element = btnSOP5;
element.style.border = "2px dotted red";

const helperTextSOP4 = `
In Shopify go to Customers - in the top right - click Add Customer. 
Fill in all their information, click No Taxes, and add the Member Tag for their discount. 
When saving, you should get a choice to "Send an email invite." Send the invite.`;

const helperTextSOP5 = `Get a small box and add their welcome items and packaging. 
You can get a shipping label from pirateship.com. 
Get their welcome box to them in the mail the same day.`;

function nextSOP(id) {
    var next;
    const match = id.match(/(\D+)(\d+)/);
    if (!match) {
        return;
    }

    next = parseInt(match[2], 10);
    next++;

    return `sop${next}`;
}

function sectionAdvance(event) {
    const button = event.target;
    const next = nextSOP(button.id);
    if (button.classList.contains("buttonDormant")) {
        return;
    }

    switch (button.id) {
        case "sop3":
        case "sop4":
        case "sop5":
            const sectionElement = document.querySelector(`.section#${next}`);
            if (!sectionElement) return;
            // wake up the section
            sectionElement.classList.remove("sectionDormant");
            // wake up any helpers and buttons in the section
            sectionElement
                .querySelectorAll(".button, .helper")
                .forEach((child) => {
                    child.classList.remove("buttonDormant", "helperDormant");
                });
            break;
        default:
            break;
    }
}

document.querySelector(".tabContent").addEventListener("click", (event) => {
    // checking for clicks within the tab container
    if (!event.target.classList.contains("advance")) {
        return; // not an advance button, ignore
    } else {
        sectionAdvance(event); // handle
    }
});

document.querySelector(".infoPanel").addEventListener("click", (event) => {
    // checking for clicks within the info panel
    if (!event.target.classList.contains("button")) {
        return;
    } else {
        // refresh/save buttons
        console.log(event.target.id);
    }
});
