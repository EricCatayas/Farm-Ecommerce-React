
final String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();

Options opts = ctxt.getOptions();
File scratchDir = opts.getScratchDir();
final String outputDir = scratchDir.getAbsolutePath();

BufferedOutputStream bos = ctxt.createScratchFileStream(classFileName)