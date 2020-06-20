package com.appmuseumharward;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.media.MediaPlayer;
import android.media.MediaPlayer.OnBufferingUpdateListener;
import android.media.MediaPlayer.OnCompletionListener;
import android.media.AudioManager;
import android.content.Intent;
import android.net.Uri;
import android.content.Context;
import android.app.DownloadManager;
import android.os.Environment;
import android.widget.Toast;
import com.facebook.react.bridge.Callback;

public class MusicPlayerModule extends ReactContextBaseJavaModule {
    private Context context;
    private MediaPlayer mediaPlayer;
    //constructor
    public MusicPlayerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = getReactApplicationContext();
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "MusicPlayerModule";
    }
    //Custom function that we are going to export to JS
    @ReactMethod
    public void showToast(String url, Callback successCallback, Callback errorCallback
                          ) {
        try {
//        MediaPlayer player = new MediaPlayer();
//        player.setAudioStreamType(AudioManager.STREAM_MUSIC);
//        player.setDataSource("http://media.harvardartmuseums.org/audio/alice/total-totality-2.mp3");
//        player.prepare();
//        player.start();
            String videoUrl = url;
            Intent playVideo = new Intent(Intent.ACTION_VIEW);
            playVideo.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            playVideo.setDataAndType(Uri.parse(videoUrl), "audio/mp3");
            context.startActivity(playVideo);
            successCallback.invoke("success");
    } catch(Exception e) {
            errorCallback.invoke(url, e.toString());
            System.out.println("I am error 889");
            System.out.println(e.toString());
    }
    }

    @ReactMethod
    public void downloadImage(String url, String name) {
        try {
          Uri uri= Uri.parse(url);
            Toast.makeText(getReactApplicationContext(), "Downloading image", Toast.LENGTH_SHORT).show();
            DownloadManager downloadManager = (DownloadManager) context.getSystemService(context.DOWNLOAD_SERVICE);
            DownloadManager.Request request = new DownloadManager.Request(uri);
            request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_WIFI |
                    DownloadManager.Request.NETWORK_MOBILE);

            request.setTitle("Download Collection Harward");
            request.setDescription("Collection file  downloading.");

            request.allowScanningByMediaScanner();
            request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);

//set the local destination for download file to a path within the application's external files directory
            request.setDestinationInExternalPublicDir(Environment.DIRECTORY_PICTURES,name+".jpeg");
            request.setMimeType("image/jpeg");
            downloadManager.enqueue(request);
            Toast.makeText(getReactApplicationContext(), "Saving image to device", Toast.LENGTH_SHORT).show();

        } catch(Exception e) {
            Toast.makeText(getReactApplicationContext(), "Unable to download image. Try Again", Toast.LENGTH_SHORT).show();
            System.out.println("Error in downloading file");
            System.out.println(e.toString());
        }
    }
}