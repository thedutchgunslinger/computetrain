const template = document.createElement("template");

template.innerHTML = `
<div id="container">
 
</div>

<style>
    :root {
        --timeline-steps-height: 25px;
        --timeline-color: black;
    }
    #container {
        display: grid;
        grid-template-columns: 300px 100px 300px;
        margin: 16px 0;
        width: min-content;
    }
    .timeline-start, .timeline-end, .timeline-step {
        box-sizing: border-box;
        border-left: 10px solid var(--timeline-color);
        min-height: var(--timeline-steps-height);
        height: 100%;
        padding-left: 10px;
    }

    .timeline-start, .timeline-end {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--timeline-color);
        position: relative;
    }

    .timeline-start::after {
        content: "";
        display: block;
        width: 20px;
        height:20px;
        background: var(--timeline-color);
        border-radius: 50%;
        position: absolute;
        top: -10px;
        left: -15px;
    }

    .timeline-end::after {
        content: "";
        display: block;
        width: 20px;
        height:20px;
        background: var(--timeline-color);
        border-radius: 50%;
        position: absolute;
        bottom: -10px;
        left: -15px;
    }

    .timeline-step span{
         color: var(--timeline-color);
         opacity: 0.5;
    }

    .timeline-step-left {
        text-align: right;
        padding-right: 50px;
        position: relative;
    }

    .timeline-step-left::after {
        content: "";
        display: block;
        width: 45px;
        height: 6px;
        background: var(--timeline-color);

        position: absolute;
        top: 8px;
        right: 0;
    }

    .timeline-step-left:empty::after {
        display: none;
    }

    .timeline-step-right {
        position: relative;
        padding-top: 13px;
    }

    .timeline-step-right::after {
        content: "";
        display: block;
        width: 90px;
        height: 6px;
        background: var(--timeline-color);

        position: absolute;
        top: 20px;
        left: -95px;
    }

    .timeline-step-right:empty::after {
        display: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin-top: 0;
    }

</style>
`;

class Timeline extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    const timelineStart = Number(this.getAttribute("timeline-start")) || 2000;
    const timelineEnd = Number(this.getAttribute("timeline-end")) || 2020;
    const timelineSteps = Number(this.getAttribute("step-size")) || 1;
    const timelineStepsHeight = this.getAttribute("step-height") || 25;
    const timelineStartText = this.getAttribute("timeline-start-text") || timelineStart;
    const timelineEndText = this.getAttribute("timeline-end-text") || timelineEnd;
    const timelineColor = this.getAttribute("timeline-color") || "black";
    const container = shadow.querySelector("#container");

    const timelineDiff = timelineEnd - timelineStart;

    const timelineStartNode = document.createElement("div");
    timelineStartNode.innerHTML = `<span>${timelineStartText}</span`;
    timelineStartNode.classList.add("timeline-start");
    timelineStartNode.style.setProperty(
      "--timeline-steps-height",
      `${timelineStepsHeight}px`
    );
    timelineStartNode.style.setProperty("--timeline-color", timelineColor);

    const timelineStartLeftNode = document.createElement("div");
    timelineStartLeftNode.classList.add("timeline-start-left");
    timelineStartLeftNode.style.setProperty(
      "--timeline-steps-height",
      `${timelineStepsHeight}px`
    );
    timelineStartLeftNode.style.setProperty("--timeline-color", timelineColor);

    const timelineStartRightNode = document.createElement("div");
    timelineStartRightNode.classList.add("timeline-start-right");
    timelineStartRightNode.style.setProperty(
      "--timeline-steps-height",
      `${timelineStepsHeight}px`
    );
    timelineStartRightNode.style.setProperty("--timeline-color", timelineColor);

    container.appendChild(timelineStartLeftNode);
    container.appendChild(timelineStartNode);
    container.appendChild(timelineStartRightNode);

    for (let i = timelineSteps; i < timelineDiff; i = i + timelineSteps) {
      const timelineStepNode = document.createElement("div");
      timelineStepNode.innerHTML = `<span>${timelineStart + i}</span`;
      timelineStepNode.classList.add("timeline-step");
      timelineStepNode.style.setProperty(
        "--timeline-steps-height",
        `${timelineStepsHeight}px`
      );
      timelineStepNode.style.setProperty("--timeline-color", timelineColor);

      const timelineStepLeftNode = document.createElement("div");
      timelineStepLeftNode.classList.add("timeline-step-left");
      timelineStepLeftNode.style.setProperty(
        "--timeline-steps-height",
        `${timelineStepsHeight}px`
      );
      timelineStepLeftNode.style.setProperty("--timeline-color", timelineColor);

      const timelineStepRightNode = document.createElement("div");
      timelineStepRightNode.classList.add("timeline-step-right");
      timelineStepRightNode.style.setProperty(
        "--timeline-steps-height",
        `${timelineStepsHeight}px`
      );
      timelineStepRightNode.style.setProperty(
        "--timeline-color",
        timelineColor
      );

      container.appendChild(timelineStepLeftNode);
      container.appendChild(timelineStepNode);
      container.appendChild(timelineStepRightNode);

      const slots = this.querySelectorAll(`[step="${timelineStart + i}"]`)  ;

      if (slots.length > 0) {
        slots.forEach((slot) => {
          const position = slot.getAttribute("side") || "left";
          if (position === "left") {
            timelineStepLeftNode.appendChild(slot);
          } else if (position === "right") {
            timelineStepRightNode.appendChild(slot);
          }
        });
      }
    }

    const timelineEndNode = document.createElement("div");
    timelineEndNode.innerHTML = `<span>${timelineEndText}</span`;
    timelineEndNode.classList.add("timeline-end");

    const timelineEndLeftNode = document.createElement("div");
    timelineEndLeftNode.classList.add("timeline-end-left");
    timelineEndLeftNode.style.setProperty(
      "--timeline-steps-height",
      `${timelineStepsHeight}px`
    );
    timelineEndLeftNode.style.setProperty("--timeline-color", timelineColor);

    const timelineEndRightNode = document.createElement("div");
    timelineEndRightNode.classList.add("timeline-end-right");
    timelineEndRightNode.style.setProperty(
      "--timeline-steps-height",
      `${timelineStepsHeight}px`
    );
    timelineEndRightNode.style.setProperty("--timeline-color", timelineColor);
    timelineEndNode.style.setProperty("--timeline-color", timelineColor);

    container.appendChild(timelineEndLeftNode);
    container.appendChild(timelineEndNode);
    container.appendChild(timelineEndRightNode);
  }
}

window.customElements.define("time-line", Timeline);
