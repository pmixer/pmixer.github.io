---
category: 'Computer Vision'
title: 'Segmentation'
type: 'Theory'
path: '/toolkits/:id'
layout: null
---
Image/Semantic/Instance segmentation and various video segmentation methods.

Assuming there are three major colors in the image, so we can segment the image by clustering pixels according to their color.
In OpenCV(py, 3.4.1), we could use code as below:

```py
im = cv2.imread('x.jpg') # Assuming to be color image
pixels = im.reshape([-1, 3])
criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 10, 1.0)
ret,label,center=cv2.kmeans(pixels.astype(np.float32),4, None, criteria,5,cv2.KMEANS_RANDOM_CENTERS)
```

For visualization we could also plot this dots in three dimensional space with help of matplotlib.
```py
# https://matplotlib.org/mpl_toolkits/mplot3d/tutorial.html
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
```
