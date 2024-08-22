export interface SectionHeadingProps {
  title: string;
  line?: boolean;
  before: string;
  className?: string;
}

export interface DotHeadingProps {
  title: string;
  variant: "primary" | "secondary";
  className?: string;
}
