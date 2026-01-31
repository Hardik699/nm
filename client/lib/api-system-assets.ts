export interface Asset {
  id: string;
  category: string;
  company?: string;
  serialNumber?: string;
  vendor?: string;
  purchaseDate?: string;
  warrantyEndDate?: string;
  processorModel?: string;
  ramSize?: string;
  storageSize?: string;
  storageType?: string;
  model?: string;
  vonageNumber?: string;
  vonageExtCode?: string;
  vonagePassword?: string;
  vitelNumber?: string;
  vitelPassword?: string;
  vitelGlobalNumber?: string;
  vitelGlobalPassword?: string;
  cameraModel?: string;
  headphoneModel?: string;
  powerSupplyWatts?: string;
  monitorSize?: string;
  refreshRate?: string;
  resolution?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PCLaptop {
  id: string;
  type: "PC" | "Laptop";
  name: string;
  mouseId?: string;
  keyboardId?: string;
  monitorId?: string;
  motherboardId?: string;
  ramIds?: string[];
  storageIds?: string[];
  cameraId?: string;
  headphoneId?: string;
  powerSupplyId?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

// System Assets API
export const systemAssetsApi = {
  async getAll(): Promise<Asset[]> {
    const response = await fetch("/api/system-assets");
    if (!response.ok) throw new Error("Failed to fetch assets");
    return response.json();
  },

  async getByCategory(category: string): Promise<Asset[]> {
    const response = await fetch(`/api/system-assets/category/${category}`);
    if (!response.ok) throw new Error("Failed to fetch assets");
    return response.json();
  },

  async getById(id: string): Promise<Asset> {
    const response = await fetch(`/api/system-assets/${id}`);
    if (!response.ok) throw new Error("Failed to fetch asset");
    return response.json();
  },

  async create(data: Asset): Promise<Asset> {
    const response = await fetch("/api/system-assets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create asset");
    return response.json();
  },

  async update(id: string, data: Partial<Asset>): Promise<Asset> {
    const response = await fetch(`/api/system-assets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update asset");
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`/api/system-assets/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete asset");
  },
};

// PC/Laptop API
export const pcLaptopsApi = {
  async getAll(): Promise<PCLaptop[]> {
    const response = await fetch("/api/pc-laptops");
    if (!response.ok) throw new Error("Failed to fetch PC/Laptops");
    return response.json();
  },

  async getById(id: string): Promise<PCLaptop> {
    const response = await fetch(`/api/pc-laptops/${id}`);
    if (!response.ok) throw new Error("Failed to fetch PC/Laptop");
    return response.json();
  },

  async create(data: PCLaptop): Promise<PCLaptop> {
    const response = await fetch("/api/pc-laptops", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create PC/Laptop");
    return response.json();
  },

  async update(id: string, data: Partial<PCLaptop>): Promise<PCLaptop> {
    const response = await fetch(`/api/pc-laptops/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update PC/Laptop");
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`/api/pc-laptops/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete PC/Laptop");
  },
};
