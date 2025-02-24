import Fuse from "fuse.js";
import { COMPANY_LIST } from "@/constant/company-list";

export class ElasticSearch {
  private static instance: ElasticSearch; // Holds the singleton instance
  private fuse: Fuse<any>;

  // Private constructor to prevent external instantiation
  private constructor() {
    const options = {
      keys: ["name"], // Search only in the 'name' field
      includeScore: true, // Include search score in results
      threshold: 0.5, // Lower threshold means stricter matching (0 = exact match, 1 = very loose)
      ignoreLocation: true, // Ignore where the match occurs in the string
      minMatchCharLength: 2, // Minimum number of characters to match
    };
    this.fuse = new Fuse(COMPANY_LIST, options);
  }

  // Static method to get the singleton instance
  public static getInstance(): ElasticSearch {
    if (!ElasticSearch.instance) {
      ElasticSearch.instance = new ElasticSearch();
    }
    return ElasticSearch.instance;
  }

  // Method to get matching companies by name
  public getMatchingCompaniesByName(name: string) {
    const results = this.fuse.search(name);
    return results.map((result) => result.item); // Extract the matched items
  }
}
