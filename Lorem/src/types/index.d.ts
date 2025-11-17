

export { };

declare global {
  interface GDom extends Window {
    loadDynamicComponent: (id: string, callback: (component: HTMLElement) => void) => void;
    document: Document;
    loadPackage: (name: string) => Promise<any>;
    loadedEvents: string[];
  }
  interface IconProps {
    src: React.FC<React.SVGProps<SVGSVGElement>>;
    variant?: "primary" | "white" | "gray400" | "black";
    size?: "sm" | "md" | "lg" | "";
    className?: string;
  };

  interface IconComponentProps {
    className?: string;
  };

}
