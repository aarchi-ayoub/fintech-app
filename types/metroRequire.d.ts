declare module '*.json' {
  const value: Record<string, string>;
  export default value;
}

interface RequireContext {
  keys(): string[];
  (id: string): Record<string, string>;
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
  ): RequireContext;
}
