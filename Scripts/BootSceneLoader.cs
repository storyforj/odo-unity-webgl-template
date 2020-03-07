using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using AOT;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BootSceneLoader : MonoBehaviour
{
    public delegate void Callback(System.IntPtr ptr);

    [DllImport("__Internal")]
    private static extern void ODOTrigger(string triggerName);

    [DllImport("__Internal")]
    private static extern void ODOTrack(string eventName, string jsonData);

    [DllImport("__Internal")]
    private static extern void ODOSave(string key, string jsonData);

    [DllImport("__Internal")]
    private static extern void ODOSave(string key, string jsonData, Callback callback);

    [DllImport("__Internal")]
    private static extern void ODOSaveForPlayer(string key, string jsonData);

    [DllImport("__Internal")]
    private static extern void ODOSaveForPlayer(string key, string jsonData, Callback callback = null);

    [DllImport("__Internal")]
    private static extern void ODOGet(string key, Callback callback);

    [DllImport("__Internal")]
    private static extern void ODOGetForPlayer(string key, Callback callback);

    // Start is called before the first frame update
    void Start()
    {
        ODOTrigger("ready");
        ODOSave("test", "{ hi: 2 }");
        ODOGet("test", GetCallback);
    }

    [MonoPInvokeCallback(typeof(Callback))]
    public static void GetCallback(System.IntPtr ptr)
    {
        string data = Marshal.PtrToStringAuto(ptr);
        // I would take a look at JsonUtility.FromJson to deserialize
        Debug.Log(data);
    }

    void ODOStart() {
        SceneManager.LoadScene(sceneName:"MainScene");
    }

    // Update is called once per frame
    void Update()
    {
    }
}
