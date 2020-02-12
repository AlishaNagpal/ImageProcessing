//
//  imageFilter.m
//  ImageProcessing
//
//  Created by Alisha Nagpal on 11/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
@interface RCT_EXTERN_MODULE(RNImageFilter, NSObject)

RCT_EXTERN_METHOD(getSourceImage:(NSDictionary*)trackinfo callback:(RCTResponseSenderBlock))
RCT_EXTERN_METHOD(deleteFolder:(NSString*)fileUrl)
@end
