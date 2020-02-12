// package com.ImageProcessing;

// import android.widget.Toast;

// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;

// import java.util.Map;
// import java.util.HashMap;

// public class ImageFilter extends ReactContextBaseJavaModule {
//   private static ReactApplicationContext reactContext;

//   ImageFilter(ReactApplicationContext context) {
//     super(context);
//     reactContext = context;
//   }
//    @Override
//   public String getName() {
//     return "ImageFilter";
//   }
//   @ReactMethod
//   public void show(String message) {
//     Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
    
//   }
// }
package com.imageprocessing;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ImageFilter extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  ImageFilter(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }
   @Override
  public String getName() {
    return "ImageFilter";
  }
  @ReactMethod
  public void show(String message) {
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
  }
}