
# Shortest Path Finder Using Dijkstra's Algorithm

## Overview

This web-based application visualizes the shortest path finding using Dijkstra's Algorithm. Users can create nodes, connect them with weighted edges, and compute the shortest path from a specified source node to all other nodes. The application also features smooth animations using GSAP (GreenSock Animation Platform) for a more engaging user experience.

## Features

- **Node Creation**: Click anywhere on the canvas to add nodes.
- **Edge Addition**: Add edges between nodes by enabling edge mode and clicking on the nodes. Edge weights are adjustable.
- **Shortest Path Calculation**: Calculate the shortest path from a specified source node using Dijkstra's Algorithm.
- **Animations**: GSAP-powered transitions for the canvas and header to enhance user interaction.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Belunymous/Shortest-Path-Visualizer
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd shortest-path-visualizer
   ```

3. **Open `index.html`**

   Open the `index.html` file in your web browser to start using the application.

## File Structure

- `index.html`: The main HTML file that sets up the application interface.
- `instructions.html`: A separate HTML page providing instructions on how to use the application.
- `style.css`: Contains the CSS styles for the application, defining layout, colors, and responsive design.
- `script.js`: The JavaScript file responsible for handling node creation, edge drawing, and shortest path calculations.
- `gsap.js`: Contains animation logic using GSAP for smooth transitions.

## Animation Details

### GSAP Animations

The application utilizes GSAP for animating the canvas and header elements:

- **Canvas Animation**: Expands the drawing area from `0vh` to `100vh` over 1 second.
- **Header Animation**: Slides the header into view from `-800%` to `0%` and fades it in over 1.5 seconds.


## How to Use

1. **Create Nodes**: Click anywhere on the canvas to create nodes. Each node is identified by a unique ID number.
2. **Add Edges**: 
   - Enable edge mode by clicking the "Add edges" button.
   - Click on two nodes to draw an edge between them.
   - Set the edge weight by clicking on the edge and entering a value in the editable field.
3. **Calculate Shortest Path**:
   - Enter the source node ID in the input box.
   - Click "Run" to calculate and display the shortest path from the source node to all other nodes.
4. **Reset**: Click "Clear" to remove all nodes and edges and reset the drawing area.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. **Fork the Repository**: Click on the "Fork" button at the top right of this page.
2. **Create a Branch**: Create a new branch for your changes.
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Make Changes**: Implement your changes and test them.
4. **Commit Your Changes**: 
   ```bash
   git add .
   git commit -m "Add your message here"
   ```
5. **Push to Your Fork**: 
   ```bash
   git push origin feature/your-feature
   ```
6. **Create a Pull Request**: Go to the repository on GitHub and open a pull request.


## Acknowledgments

- **GSAP**: For providing a powerful library for animations ([GSAP](https://greensock.com/gsap/)).
- **Dijkstra's Algorithm**: For the shortest path computation algorithm ([Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)).

