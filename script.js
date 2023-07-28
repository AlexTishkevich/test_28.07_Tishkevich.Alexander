const mainForm = document.getElementById("mainForm");
const mainLineBlock = document.getElementById("mainLine");
const saveButton = document.getElementById("saveSegment");
const inputLengthBlock = document.getElementById("lengthInput");
const blocks = [];
let emptyBlocks = [];

saveButton.addEventListener("click", function (e) {
    e.preventDefault();
    createBlock(inputLengthBlock.value);
    mainForm.reset();
});

function createBlock(num) {
    if (!num) {
    return;
    }
    if (emptyBlocks.length) {
        emptyBlocks.forEach((id) => {
        num -= blocks[id].length;
        blocks[id].empty = false;
    });
    }

    if (num) {
        blocks.push({
            length: num,
            empty: false,
        });
    }
    emptyBlocks = [];

    render();
}

function deleteBlock(id) {
    blocks[id].empty = true;
    emptyBlocks.push(id);

    render();
}

function render() {
    mainLineBlock.innerHTML = "";
    blocks.forEach((block, index) => {
        let backgroundColor = 'aqua';
        if(block.empty){
            backgroundColor = 'black';
        }

        const segmentDiv = document.createElement("div");
        segmentDiv.id = 'box';
        segmentDiv.className = "block";
        segmentDiv.style.backgroundColor = backgroundColor;
        segmentDiv.onclick = () => {
            segmentDiv.style.backgroundColor = "red";
        }
        for (let i = 0; i < block.length; i++) {
            const sectionDivSegment = document.createElement("div");
            sectionDivSegment.id = "boxes";
            segmentDiv.appendChild(sectionDivSegment);
        }
        mainLineBlock.appendChild(segmentDiv);

        segmentDiv.ondblclick = () => {
            deleteBlock(index);
        };
        });
    }

