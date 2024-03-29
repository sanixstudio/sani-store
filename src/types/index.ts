export interface LaptopProduct {
  _id: string;
  _type: "laptop";
  isFavorite: boolean;
  title: string;
  longTitle: string;
  description: string;
  rating: number;
  totalReviews: number;
  category: string;
  brand: string;
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

export interface CartItem {
  _id: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  title: string;
  price: number;
  quantity: number;
}
