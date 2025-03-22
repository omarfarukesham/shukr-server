interface ITemplateData {
  type: "description" | "question";
  content: string;
}



export interface ITemplate {
  id: string;
  title?: string;
  templateImageUrl?: string;
  templateGuide?: string;
  templateData?: ITemplateData[]; 
  category?: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  updatedBy?: string;
}
