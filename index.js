const tab1 = document.querySelector(".tabContent#onboarding");
//const tabSOP3 = document.querySelector(".section#sop3");
//const btnSOP3 = document.querySelector(".button#sop3");
//const tabSOP4 = document.querySelector(".section#sop4");
//const helperSOP4 = document.querySelector(".helper#sop4");
//const btnSOP4 = document.querySelector(".button#sop4");
//const tabSOP5 = document.querySelector(".section#sop5");
//const helperSOP5 = document.querySelector(".helper#sop5");
//const btnSOP5 = document.querySelector(".button#sop5");

//const element = btnSOP5;
//element.style.border = "2px dotted red";

const helperTextSOP4 = `In Shopify go to Customers - in the top right - click Add Customer. 

Fill in all their information, click No Taxes, and add the Member Tag for their discount. 

When saving, you should get a choice to "Send an email invite." 

Send the invite.`;

const helperTextSOP5 = `Get a small box and add their welcome items and packaging. 

You can get a shipping label from pirateship.com. 

Get their welcome box to them in the mail the same day.`;

const helperTexts = {
    sop4: helperTextSOP4,
    sop5: helperTextSOP5
};

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
            button.classList.add("buttonDormant");
            break;
        default:
            break;
    }
}

function helperDisplay(event) {
    const helper = event.target;
    if (helper.classList.contains("helperDormant")) {
        return;
    }

    const text = helperTexts[helper.id];
    if (text) {
        tooltip.innerHTML = text;
        tooltip.style.display = "block";
        positionTooltip(event);
    }
}

function positionTooltip(event) {
    const xOffset = 10;
    const yOffset = 10;
    const tooltipRect = tooltip.getBoundingClientRect();
    tooltip.style.left = `${event.pageX + xOffset}px`;
    tooltip.style.top = `${event.pageY + yOffset}px`;

    // make sure it's within the viewport
    if (tooltipRect.right > window.innerWidth) {
        tooltip.style.left = `${event.pageX - tooltipRect.width - xOffset}px`;
    }
    if (tooltipRect.bottom > window.innerHeight) {
        tooltip.style.top = `${event.pageY - tooltipRect.height - yOffset}px`;
    }
}

tab1.addEventListener("click", (event) => {
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

const helperElements = document.querySelectorAll(".helper");

helperElements.forEach(helper => {
    helper.addEventListener("mouseenter", (event) => {
        helperDisplay(event); // show tooltip
    });
    helper.addEventListener("mouseleave", (event) => {
        tooltip.style.display = "none"; // hide tooltip
    });
});