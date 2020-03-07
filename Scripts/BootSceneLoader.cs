using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using AOT;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BootSceneLoader : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void ODOTrigger(string triggerName);

    [DllImport("__Internal")]
    private static extern void ODOTrack(string eventName, string jsonData);

    // Start is called before the first frame update
    void Start()
    {
        ODOTrigger("ready");
    }

    void ODOStart() {
        SceneManager.LoadScene(sceneName:"MainScene");
    }

    // Update is called once per frame
    void Update()
    {
    }
}
