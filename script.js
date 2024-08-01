let blocks = document.getElementsByClassName("drawing-area")[0];
let addEdge = false;
let cnt = 0;
let dist;

let alerted = localStorage.getItem("alerted") || "";
if (alerted !== "yes") {
  alert(
    "Read instructions before proceeding by clicking i-icon in the top-right corner"
  );
  localStorage.setItem("alerted", "yes");
}

const addEdges = () => {
  if (cnt < 2) {
    alert("Create atleast two nodes to add an edge");
    return;
  }

  addEdge = true;
  document.getElementById("add-edge-enable").disabled = true;
  document.getElementsByClassName("run-btn")[0].disabled = false;
  
  dist = new Array(cnt + 1)
    .fill(Infinity)
    .map(() => new Array(cnt + 1).fill(Infinity));
};

let arr = [];

const appendBlock = (x, y) => {
  document.querySelector(".reset-btn").disabled = false;
  document.querySelector(".click-instruction").style.display = "none";
  
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.top = `${y}px`;
  block.style.left = `${x}px`;
  block.style.transform = `translate(-50%,-50%)`;
  block.id = cnt;

  block.innerText = cnt++;

  
  block.addEventListener("click", (e) => {
    
    e.stopPropagation() || (window.Event.cancelBubble = "True");

    
    if (!addEdge) return;

    block.style.backgroundColor = "coral";
    arr.push(block.id);

    
    if (arr.length === 2) {
      drawUsingId(arr);
      arr = [];
    }
  });
  blocks.appendChild(block);
};


blocks.addEventListener("click", (e) => {
  if (addEdge) return;
  if (cnt > 15) {
    alert("cannot add more than 15 vertices");
    return;
  }
  console.log(e.x, e.y);
  appendBlock(e.x, e.y);
});

const drawLine = (x1, y1, x2, y2, ar) => {
  
  if (dist[Number(ar[0])][Number(ar[1])] !== Infinity) {
    document.getElementById(arr[0]).style.backgroundColor = "#333";
    document.getElementById(arr[1]).style.backgroundColor = "#333";
    return;
  }

  console.log(ar);
 
  const len = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  const slope = x2 - x1 ? (y2 - y1) / (x2 - x1) : y2 > y1 ? 90 : -90;

  
  dist[Number(ar[0])][Number(ar[1])] = Math.round(len / 10);
  dist[Number(ar[1])][Number(ar[0])] = Math.round(len / 10);

 
  const line = document.createElement("div");
  line.id =
    Number(ar[0]) < Number(ar[1])
      ? `line-${ar[0]}-${ar[1]}`
      : `line-${ar[1]}-${ar[0]}`;
  line.classList.add("line");
  line.style.width = `${len}px`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;

 
  let p = document.createElement("p");
  p.classList.add("edge-weight");
  p.innerText = Math.round(len / 10);
  p.contentEditable = "true";
  p.inputMode = "numeric";
  p.addEventListener("blur", (e) => {
    if (isNaN(Number(e.target.innerText))) {
      alert("Enter valid edge weight");
      return;
    }
    n1 = Number(p.closest(".line").id.split("-")[1]);
    n2 = Number(p.closest(".line").id.split("-")[2]);
    // console.log(p.closest('.line'), e.target.innerText, n1, n2);
    dist[n1][n2] = Number(e.target.innerText);
    dist[n2][n1] = Number(e.target.innerText);
  });
  line.style.transform = `rotate(${
    x1 > x2 ? Math.PI + Math.atan(slope) : Math.atan(slope)
  }rad)`;

  p.style.transform = `rotate(${
    x1 > x2 ? (Math.PI + Math.atan(slope)) * -1 : Math.atan(slope) * -1
  }rad)`;

  line.append(p);
  blocks.appendChild(line);
  document.getElementById(arr[0]).style.backgroundColor = "#333";
  document.getElementById(arr[1]).style.backgroundColor = "#333";
};
