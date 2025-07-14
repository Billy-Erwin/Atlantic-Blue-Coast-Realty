import { Listing } from "./Listing";
// Note: This test file is intended for Angular's Jasmine/Karma test runner, which provides describe/it/expect globally.

describe("Listing", () => {
  it("should create an instance with standard fields", () => {
    const listingObj = {
      Id: "123",
      StandardFields: {
        UnparsedAddress: "123 Main St",
        Photos: [{ Uri300: "photo.jpg" }],
      },
      CustomFields: [
        {
          Main: [{ Sub: [{ Field: "Value" }] }],
        },
      ],
    };
    const listing = new Listing(listingObj);
    expect(listing.id).toBe("123");
    expect(listing.standardFields).toBeTruthy();
    expect(listing.primaryPhoto).toBe("photo.jpg");
    expect(listing.contactComponentInfo).toBeTruthy();
    expect(listing.customFields).toBeTruthy();
    expect(listing.detailSections).toBeTruthy();
  });

  it("should use default photo if none provided", () => {
    const listingObj = {
      Id: "456",
      StandardFields: { UnparsedAddress: "456 Main St", Photos: [{}] },
      CustomFields: [],
    };
    const listing = new Listing(listingObj);
    expect(listing.primaryPhoto).toContain("abc_logo_2.jpg");
  });

  it("should handle null input gracefully", () => {
    const listing = new Listing(null);
    expect(listing.standardFields).toBeUndefined();
  });
});
