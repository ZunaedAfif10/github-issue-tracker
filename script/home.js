const allBtn = document.getElementById('All-btn');
const openBtn = document.getElementById('Open-btn');
const closedBtn = document.getElementById('Closed-btn');

const tabContainer = document.getElementById('Tab-container');
tabContainer.addEventListener('click', function (event) {
    if (event.target === openBtn) {
        allBtn.classList.remove('btn-primary');
        openBtn.classList.remove('btn-primary');
        closedBtn.classList.remove('btn-primary');

        total.innerText = open + " Issues";
        openBtn.classList.add('btn-primary');
        loadOpen();
    }
    else if (event.target === closedBtn) {
        allBtn.classList.remove('btn-primary');
        openBtn.classList.remove('btn-primary');
        closedBtn.classList.remove('btn-primary');

        total.innerText = close + " Issues";
        closedBtn.classList.add('btn-primary');
        loadClose();
    }
    else if (event.target === allBtn) {
        allBtn.classList.remove('btn-primary');
        openBtn.classList.remove('btn-primary');
        closedBtn.classList.remove('btn-primary');

        total.innerText = (open + close) + " Issues";
        allBtn.classList.add('btn-primary');
        loadAll();
    }
})


const total = document.getElementById('Total');
let f=0;
const loadAll = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(show => {
            // console.log(show.data)
            // total.innerText = show.data.length + " Issues";
            if(f === 0){
                countData(show.data);
                f=1;
            }
            displayIssue(show.data);
        }
        );
}
const loadOpen = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(show => {
            displayOpen(show.data);
        }
        );
}
const loadClose = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(show => {
            displayClose(show.data);
        }
        );
}
loadAll();

const createLabel=(arr)=>{
    const label = arr.map((lab)=>` 
                <p class="font-normal text-xs bg-yellow-100 border-yellow-300 border text-yellow-700 inline-block px-2 py-1 rounded-3xl"> ${lab}</p>
                `)
    return label.join(' ');
}

let open = 0;
let close = 0;
const countData = (count) => {
    for (let i of count) {
        if (i.status === 'open')
            open++;
        else
            close++;
    }
    // console.log(open);
    // console.log(close);
}
//       "id": 1,
//       "title": "Fix navigation menu on mobile devices",
//       "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
//       "status": "open",
//       "labels": [
//         "bug",
//         "help wanted"
//       ],
//       "priority": "high",
//       "author": "john_doe",
//       "assignee": "jane_smith",
//       "createdAt": "2024-01-15T10:30:00Z",
//       "updatedAt": "2024-01-15T10:30:00Z"

const displayIssue = (datas) => {
    const issueContainer = document.getElementById('issue-container');
    issueContainer.innerHTML = "";
    for (let data of datas) {
        // console.log(data.createdAt);
        const date = new Date(data.createdAt);
        const issueDiv = document.createElement('div');
        issueDiv.innerHTML = ` 
        <div class=" bg-white shadow-sm border-t-4 ${data.status === 'open' ? 'border-blue-500' : 'border-red-400'} rounded-md h-full">
            <div class="flex justify-between px-5 pt-5">
                <img src="assets/Open-Status.png" alt="" class="inline-block w-8">
                <p class="bg-red-100 text-red-800 inline-block px-7 py-1 rounded-2xl">${data.priority}</p>
            </div>
            <div class="mt-4 space-y-2 px-5">
                <h1 class="font-semibold">${data.title}</h1>
                <p class="text-gray-500">${data.description}</p>
            </div>
            <div class="mt-4 px-5 pb-4">
               ${createLabel(data.labels)}
            </div>
            <hr class="border-t-2 border-gray-200">
            <div class="py-4 px-5">
                <p class="text-gray-500">#${data.id} by ${data.author}</p>
                <p class="text-gray-500">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
        </div>
        `
        issueContainer.appendChild(issueDiv);
    }

}

const displayOpen = (datas) => {
    const issueContainer = document.getElementById('issue-container');
    issueContainer.innerHTML = "";
    for (let data of datas) {
        // console.log(data.createdAt);
        if (data.status === 'open') {
            const date = new Date(data.createdAt);
            const issueDiv = document.createElement('div');
            issueDiv.innerHTML = ` 
        <div class=" bg-white shadow-sm border-t-4 ${data.status === 'open' ? 'border-blue-500' : 'border-red-400'} rounded-md h-full">
            <div class="flex justify-between px-5 pt-5">
                <img src="assets/Open-Status.png" alt="" class="inline-block w-8">
                <p class="bg-red-100 text-red-800 inline-block px-7 py-1 rounded-2xl">${data.priority}</p>
            </div>
            <div class="mt-4 space-y-2 px-5">
                <h1 class="font-semibold">${data.title}</h1>
                <p class="text-gray-500">${data.description}</p>
            </div>
            <div class="mt-4 flex gap-2 px-5 pb-4">
                ${createLabel(data.labels)}
            </div>
            <hr class="border-t-2 border-gray-200">
            <div class="py-4 px-5">
                <p class="text-gray-500">#${data.id} by ${data.author}</p>
                <p class="text-gray-500">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
        </div>
        `
            issueContainer.appendChild(issueDiv);
        }
    }

}
const displayClose = (datas) => {
    const issueContainer = document.getElementById('issue-container');
    issueContainer.innerHTML = "";
    for (let data of datas) {
        // console.log(data.createdAt);
        if (data.status === 'closed') {
            const date = new Date(data.createdAt);
            const issueDiv = document.createElement('div');
            issueDiv.innerHTML = ` 
        <div class=" bg-white shadow-sm border-t-4 ${data.status === 'open' ? 'border-blue-500' : 'border-red-400'} rounded-md h-full">
            <div class="flex justify-between px-5 pt-5">
                <img src="assets/Open-Status.png" alt="" class="inline-block w-8">
                <p class="bg-red-100 text-red-800 inline-block px-7 py-1 rounded-2xl">${data.priority}</p>
            </div>
            <div class="mt-4 space-y-2 px-5">
                <h1 class="font-semibold">${data.title}</h1>
                <p class="text-gray-500">${data.description}</p>
            </div>
            <div class="mt-4 flex gap-2 px-5 pb-4">
                ${createLabel(data.labels)}
            </div>
            <hr class="border-t-2 border-gray-200">
            <div class="py-4 px-5">
                <p class="text-gray-500">#${data.id} by ${data.author}</p>
                <p class="text-gray-500">${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
        </div>
        `
            issueContainer.appendChild(issueDiv);
        }
    }

}