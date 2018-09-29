---
category: 'Toolkits'
title: 'Add layers in Caffe'
type: 'Toolkit'
path: '/toolkits/:id'
layout: null
---

You should be able to compile Caffe successfully before reading this post.

By chance, I need to test the [SINT](https://github.com/taotaoorange/SINT) project, and this would be a good demo showing how to add new layers to Caffe.

For this case, using official [Caffe](https://github.com/BVLC/caffe) developed by BVLC, we need to put provided normalize_layer.cpp and .cu file
into `src/caffe/layers` folder, put .hpp file into `include/caffe/layers`. Then adding ROI pooling layer included in [Fast-RCNN](https://github.com/rbgirshick/fast-rcnn), copy lines defining ROIPooling(keyword search is enough) in `src/caffe/proto/caffe.proto` from Fast-RCNN to the our caffe.proto(BTW, protobuf is quite similar to SUN RPC), copy roi_* files inside `src/caffe/layers` combined with fast_rcnn_layers.hpp inside `include/caffe/` to corresponding folders to our branch.

Then re-make Caffe, SINT model should be runnable now which serves as a good example for adding given new layers.
