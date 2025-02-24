export interface ITemplateGuide {
    id: string;
    guideDetails: string;
    guideImageUrl: string;
    guideVideoUrl: string;
  }
  
  export interface ITemplate {
    id: string;
    title: string;
    templateImageUrl: string;
    templateDetails: string;
    templateGuide: ITemplateGuide[];
    category: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }
  