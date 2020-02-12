// package com.ImageProcessing;

// import com.facebook.react.ReactPackage;
// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.uimanager.ViewManager;

// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;
// import com.NativeModule.ImageFilter;

// public class ImageFilterPackage implements ReactPackage {

//   @Override
//   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
//     return Collections.emptyList();
//   }

//   @Override
//   public List<NativeModule> createNativeModules( ReactApplicationContext reactContext) {
//     List<NativeModule> modules = new ArrayList<>();
//     modules.add(new ImageFilter(reactContext));
//     return modules;
//   }

// }

package com.imageprocessing;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.imageprocessing.ImageFilter;

public class ImageFilterPackage implements ReactPackage {

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules( ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new ImageFilter(reactContext));
    return modules;
  }

}