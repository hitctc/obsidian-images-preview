import { describe, expect, it } from "vitest";
import { GalleryService } from "../src/services/gallery-service";
import { TriggerScope } from "../src/types";

describe("GalleryService", () => {
  it("builds selector by scope", () => {
    const service = new GalleryService({} as never);
    const selector = service.buildSelector(TriggerScope.MarkdownOnly, false);
    expect(selector).toContain("workspace-leaf-content");
    expect(selector).toContain(":not(a img)");
  });

  it("collects images from document in order", () => {
    const service = new GalleryService({} as never);
    const container = document.createElement("div");
    container.innerHTML = `
      <div class=\"workspace-leaf-content\" data-type=\"markdown\">
        <img src=\"a.png\" alt=\"A\" />
        <img src=\"b.png\" alt=\"B\" />
      </div>
    `;
    document.body.appendChild(container);

    const source = container.querySelectorAll("img")[1] as HTMLImageElement;
    const result = service.collectFromDocument(
      document,
      source,
      ".workspace-leaf-content[data-type='markdown'] img"
    );

    expect(result.items.length).toBe(2);
    expect(result.activeIndex).toBe(1);
    expect(result.items[0].src).toContain("a.png");
  });

  it("parses markdown fallback", () => {
    const service = new GalleryService({
      metadataCache: {
        getFirstLinkpathDest: (path: string) => ({ path })
      },
      vault: {
        getResourcePath: (file: { path: string }) => `app://local/${file.path}`
      }
    } as never);

    const content = `
![Alt1](https://img.example/a.png)
![[assets/bird.png|Bird]]
<img src=\"https://img.example/c.png\" alt=\"C\" />
`;

    const file = { path: "notes/demo.md" };
    const result = service.parseMarkdownImages(content, file as never);

    expect(result.length).toBe(3);
    expect(result[1].src).toContain("app://local/assets/bird.png");
  });
});
