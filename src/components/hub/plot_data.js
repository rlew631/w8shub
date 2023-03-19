import Link from '@mui/material/Link';

const mylist = [
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'n', dataset: 'COCO', map50: 45.7, notes: 'P5', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5n.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 's', dataset: 'COCO', map50: 56.8, notes: 'P5', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5s.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'm', dataset: 'COCO', map50: 64.1, notes: 'P5', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5m.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'l', dataset: 'COCO', map50: 67.3, notes: 'P5', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5l.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'x', dataset: 'COCO', map50: 68.9, notes: 'P5', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5x.pt'},

  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'n6', dataset: 'COCO', map50: 54.4, notes: 'P6', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5n6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 's6', dataset: 'COCO', map50: 63.7, notes: 'P6', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5s6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'm6', dataset: 'COCO', map50: 69.3, notes: 'P6', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5m6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'l6', dataset: 'COCO', map50: 71.3, notes: 'P6', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5l6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'x6', dataset: 'COCO', map50: 72.7, notes: 'P6', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5x6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'x6 w/ TTA', dataset: 'COCO', map50: 72.7, notes: 'TTA (Test Time Augmentation). Same weights as YOLOv5x6 model with TTA enabled. See link for details on setting up runtime environment', linkURL: 'https://github.com/ultralytics/yolov5/issues/303'},

  {modelType: 'Segmentation', modelName: 'YOLOv5', subModel: 'n-seg', dataset: 'COCO', map50: 9000, linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5n-seg.pt'},
  {modelType: 'Segmentation', modelName: 'YOLOv5', subModel: 's-seg', dataset: 'COCO', map50: 9000, linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5s-seg.pt'},
  {modelType: 'Segmentation', modelName: 'YOLOv5', subModel: 'm-seg', dataset: 'COCO', map50: 9000, linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5m-seg.pt'},
  {modelType: 'Segmentation', modelName: 'YOLOv5', subModel: 'l-seg', dataset: 'COCO', map50: 9000, linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5l-seg.pt'},
  {modelType: 'Segmentation', modelName: 'YOLOv5', subModel: 'x-seg', dataset: 'COCO', map50: 9000, linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5x-seg.pt'},
  
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'n-cls', dataset: 'ImageNet', map50: 9000, notes: '', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5n-cls.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 's-cls', dataset: 'ImageNet', map50: 9000, notes: '', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5s-cls.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'm-cls', dataset: 'ImageNet', map50: 9000, notes: '', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5m-cls.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'l-cls', dataset: 'ImageNet', map50: 9000, notes: '', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5l-cls.pt'},
  {modelType: 'Classification', modelName: 'YOLOv5', subModel: 'x-cls', dataset: 'ImageNet', map50: 9000, notes: '', linkURL: 'https://github.com/ultralytics/yolov5/releases/download/v7.0/yolov5x-cls.pt'},
  
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'N', dataset: 'COCO', map50: 9000, notes: 'p5', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6n.pt'},
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'S', dataset: 'COCO', map50: 9000, notes: 'p5', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6s.pt'}, 
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'M', dataset: 'COCO', map50: 9000, notes: 'p5', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6m.pt'}, 
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'L', dataset: 'COCO', map50: 9000, notes: 'p5', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6l.pt'},

  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'N6', dataset: 'COCO', map50: 9000, notes: 'p6', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6n6.pt'}, 
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'S6', dataset: 'COCO', map50: 9000, notes: 'p6', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6s6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'M6', dataset: 'COCO', map50: 9000, notes: 'p6', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6m6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv6', subModel: 'L6', dataset: 'COCO', map50: 9000, notes: 'p6', linkURL: 'https://github.com/meituan/YOLOv6/releases/download/0.3.0/yolov6l6.pt'},

  {modelType: 'Classification', modelName: 'YOLOv7', subModel: '', dataset: 'COCO', map50: 69.7, fps: 161, testSize: 640, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7.pt'},
  {modelType: 'Classification', modelName: 'YOLOv7', subModel: 'X', dataset: 'COCO', map50: 71.2, fps: 114, testSize: 640, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7.pt'},
  {modelType: 'Classification', modelName: 'YOLOv7', subModel: 'W6', dataset: 'COCO', map50: 72.6, fps: 84, testSize: 1280, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-w6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv7', subModel: 'E6', dataset: 'COCO', map50: 73.5, fps: 56, testSize: 1280, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-e6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv7', subModel: 'D6', dataset: 'COCO', map50: 74.0, fps: 44, testSize: 1280, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-d6.pt'},
  {modelType: 'Classification', modelName: 'YOLOv7', subModel: 'E6E', dataset: 'COCO', map50: 74.4, notes: 'https://github.com/WongKinYiu/yolov7/tree/pose https://arxiv.org/abs/2204.06806', fps: 36, testSize: 1280, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-e6e.pt'},

  {modelType: 'Pose', modelName: 'YOLOv7', subModel: 'W6-pose', dataset: 'Keypoints Labels of MS COCO 2017', map50: 0, notes: 'multi-person capable https://arxiv.org/abs/2204.06806', fps: 0, testSize: 0, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-w6-pose.pt'},

  {modelType: 'Segmentation', modelName: 'YOLOv7', subModel: 'mask', dataset: 'COCO', map50: 69.4, notes: 'YOLOv7 for instance segmentation (YOLOR + YOLOv5 + YOLACT)', testSize: 640, linkURL: 'https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-seg.pt'},
]

// include a button that lets you filter based on the datasets in the list as well!!!!


// include DAMO YOLO: https://github.com/tinyvision/DAMO-YOLO
// and YOLOP: YOU ONLY LOOK ONCE FOR PANOPTIC DRIVING PERCEPTION https://pytorch.org/hub/hustvl_yolop/
// also maybe https://github.com/TexasInstruments/edgeai-yolov5/tree/yolo-pose
// include a `paper:` section

// add salient feature extraction: https://github.com/andrewjouffray/salient-extract (segmentation + maybe more. see if there's a way to just cover segmentation first)


let id = 0
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const rows = mylist.map(item => {
  item.dateUpdated = today
  item.id = id
  id++
  
  if (item.modelName == 'YOLOv5'){
    item.modelURL = 'https://github.com/ultralytics/yolov5'
  }
  else if (item.modelName == 'YOLOv6'){
    item.modelURL = 'https://github.com/meituan/YOLOv6'
  }
  else if (item.modelName == 'YOLOv7'){
    item.modelURL = 'https://github.com/WongKinYiu/yolov7'
  }
  return item
})

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'modelType',
    headerName: 'Model type',
    width: 150,
  },
  {
    field: 'modelName',
    headerName: 'Model Name',
    width: 150,
    renderCell: (params) => (
      <Link href={`${params.row.modelURL}`}>{params.row.modelName}</Link>
    )
  },
  {
    field: 'subModel',
    headerName: 'Sub-model',
    width: 150,
  },
  {
    field: 'dataset',
    headerName: 'Dataset',
    width: 150,
  },
  {
    field: 'map50',
    headerName: 'mAP 50',
    type: 'number',
    width: 110,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 200,
  },
  {
    field: 'link',
    headerName: 'Link',
    width: 150,
    renderCell: (params) => (
      <Link href={`${params.row.linkURL}`}>{params.row.modelName + params.row.subModel}</Link>
    )
  },
];

export {rows, columns}