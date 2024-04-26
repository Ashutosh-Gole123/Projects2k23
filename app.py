import cv2
import torch
from models.experimental import attempt_load
from utils.general import non_max_suppression, scale_coords
from utils.plots import plot_one_box

# Function to perform object detection using YOLOv7
def detect_objects_yolov7(image_path, weights_path, conf_threshold=0.1):
    # Load YOLOv7 model
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    model = attempt_load(weights_path, map_location=device)
    model.eval()

    # Load image using OpenCV
    img = cv2.imread(image_path)
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB

    # Resize image to model input size (e.g., 640x640)
    img_resized = cv2.resize(img_rgb, (640, 640))

    # Convert image to torch tensor and normalize
    img_tensor = torch.from_numpy(img_resized.transpose(2, 0, 1)).float().div(255.0).unsqueeze(0)

    # Perform inference
    with torch.no_grad():
        pred = model(img_tensor)[0]
        pred = non_max_suppression(pred, conf_threshold)

    # Draw bounding boxes on the image
    for det in pred:
        if det is not None and len(det):
            for *xyxy, conf, cls in det:
                plot_one_box(xyxy, img_rgb, label=f'Class {int(cls)} ({conf:.2f})')

    # Display the annotated image
    cv2.imshow('Annotated Image', cv2.cvtColor(img_rgb, cv2.COLOR_RGB2BGR))
    cv2.waitKey(0)
    cv2.destroyAllWindows()

# Define paths to the image and YOLOv7 weights
image_path = 'C:/Users/Ashutosh Gole/OneDrive/Desktop/Projects/Acne Detection/content/yolov7/Pimples-detection-14/train/images/1Capture_JPG.rf.26649fddad705c18185c14e7b9816817.jpg'
# image_path = 'C:/Users/Ashutosh Gole/OneDrive/Desktop/Projects/Acne Detection/content/yolov7/Images/img1.jpg'
weights_path = 'C:/Users/Ashutosh Gole/OneDrive/Desktop/Projects/Acne Detection/content/yolov7/runs/train/exp/weights/best.pt'

# Perform object detection
detect_objects_yolov7(image_path, weights_path)