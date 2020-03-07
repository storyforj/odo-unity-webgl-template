# odo-unity-webgl-template

This repository contains everything you need to integrate your Unity game with ODO.

** Steps to Integrate **

1. Add or merge the folders in this repo into your Unity assets folder
2. Go to Edit > Project Settings > Player, On the WebGL tab > Resolution and Presentation (or Publishing Settings in older versions) and choose your new template (if it doesn’t appear, try restarting Unity).
3. Create a scene as your first scene in your project call it "BootScene"
4. Add an Empty Object into the BootScene
5. Name the Empty Object "BootSceneLoader"
6. Use "Add a Component" on the BootSceneLoader to add the "BootSceneLoader.cs" script
7. Make sure to edit BootSceneLoader.cs and specify which scene you'd like it to start once the player is ready

That should be it. Follow the examples in BootSceneLoader.cs and the index.html file to use everything available
from the [odo-js-sdk](https://github.com/storyforj/odo-js-sdk).
