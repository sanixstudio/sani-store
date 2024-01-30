export interface LaptopProduct {
  _id: string;
  _type: "laptop";
  title: string;
  description: string;
  rating: number;
  totalReviews: number;
  model: string;
  sku: string;
  price: number;
  mainImage: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string; // Reference to an actual image asset
    };
  };
  productImages: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string; // Reference to actual image assets
    };
  }[];
  highlightFeatures: string[];
  specs: {
    screenSize: number;
    screenResolution: string;
    isTouchScreen: boolean;
    refreshRate: number;
    brightness: number;
    processorModel: string;
    cpuBaseClockFrequency: number;
    storageType: string;
    totalStorageCapacity: number;
    systemMemoryRam: number;
    graphics: string;
  };
}
