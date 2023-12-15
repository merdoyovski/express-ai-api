import { Pinecone } from "@pinecone-database/pinecone";

const pineconeConfig = {
  apiKey: "f12a51b1-034e-4a30-a7c9-fa5739b38ee9",
  environment: "us-central1-gcp"
};

export const pinecone = new Pinecone(pineconeConfig);
