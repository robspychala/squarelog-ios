//  Copyright 2010 Todd Ditchendorf
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

#import "PKJSEmpty.h"
#import "PKJSUtils.h"
#import "PKJSTerminal.h"
#import <ParseKit/PKEmpty.h>

#pragma mark -
#pragma mark Methods

#pragma mark -
#pragma mark Properties

#pragma mark -
#pragma mark Initializer/Finalizer

static void PKEmpty_initialize(JSContextRef ctx, JSObjectRef this) {
    
}

static void PKEmpty_finalize(JSObjectRef this) {
    // released in PKParser_finalize
}

static JSStaticFunction PKEmpty_staticFunctions[] = {
{ 0, 0, 0 }
};

static JSStaticValue PKEmpty_staticValues[] = {        
{ 0, 0, 0, 0 }
};

#pragma mark -
#pragma mark Public

JSClassRef PKEmpty_class(JSContextRef ctx) {
    static JSClassRef jsClass = NULL;
    if (!jsClass) {                
        JSClassDefinition def = kJSClassDefinitionEmpty;
        def.parentClass = PKTerminal_class(ctx);
        def.staticFunctions = PKEmpty_staticFunctions;
        def.staticValues = PKEmpty_staticValues;
        def.initialize = PKEmpty_initialize;
        def.finalize = PKEmpty_finalize;
        jsClass = JSClassCreate(&def);
    }
    return jsClass;
}

JSObjectRef PKEmpty_new(JSContextRef ctx, void *data) {
    return JSObjectMake(ctx, PKEmpty_class(ctx), data);
}

JSObjectRef PKEmpty_construct(JSContextRef ctx, JSObjectRef constructor, size_t argc, const JSValueRef argv[], JSValueRef *ex) {
    PKEmpty *data = [[PKEmpty alloc] init];
    return PKEmpty_new(ctx, data);
}
