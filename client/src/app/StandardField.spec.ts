import { StandardField } from "./StandardField";
// Note: This test file is intended for Angular's Jasmine/Karma test runner, which provides describe/it/expect globally.

describe("StandardField", () => {
  it("should create an instance with provided values", () => {
    const sparkObj = {
      Searchable: true,
      Type: "string",
      ResourceUri: "/uri",
      HasList: true,
      MaxListSize: 5,
      MlsVisible: ["A"],
      Label: "Test Label",
      Defaults: ["X"],
    };
    const field = new StandardField("TestName", sparkObj);
    expect(field.fieldName).toBe("TestName");
    expect(field.searchable).toBe(true);
    expect(field.type).toBe("string");
    expect(field.resourceUri).toBe("/uri");
    expect(field.hasList).toBe(true);
    expect(field.maxListSize).toBe(5);
    expect(field.mlsVisible).toEqual(["A"]);
    expect(field.label).toBe("Test Label");
    expect(field.defaults).toEqual(["X"]);
  });

  it("should use default values if sparkStandardField is missing properties", () => {
    const field = new StandardField("TestName", {});
    expect(field.fieldName).toBe("TestName");
    expect(field.searchable).toBe(false);
    expect(field.type).toBe("");
    expect(field.resourceUri).toBe("");
    expect(field.hasList).toBe(false);
    expect(field.maxListSize).toBe(0);
    expect(field.mlsVisible).toEqual([]);
    expect(field.label).toBe("");
    expect(field.defaults).toEqual([]);
  });
});
