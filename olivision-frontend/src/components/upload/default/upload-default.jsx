/** @format */

import { useDropzone } from 'react-dropzone';
import { mergeClasses } from 'minimal-shared/utils';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import FormHelperText from '@mui/material/FormHelperText';

import logo from 'src/assets/logo.svg';
import { useTranslate } from 'src/locales';
import { UploadIllustration } from 'src/assets/illustrations';

import { SplashScreen } from 'src/components/loading-screen';

import { Iconify } from '../../iconify';
import { uploadClasses } from '../classes';
import { RejectedFiles } from '../components/rejected-files';
import { SingleFilePreview } from '../components/single-file-preview';
import { AnalyticsWidgetSummary } from '../components/analytics-widget-summary';
import {
  UploadArea,
  DeleteButton,
  UploadWrapper,
  SubmitContainer,
  PlaceholderContainer,
} from './styles';

// ----------------------------------------------------------------------

export function Upload({
  sx,
  value,
  error,
  disabled,
  result,
  onDelete,
  onUpload,
  onRemove,
  className,
  helperText,
  onRemoveAll,
  slotProps,
  loading = false,
  multiple = false,
  hideFilesRejected = false,
  onClick,
  previewOrientation = 'horizontal',
  ...dropzoneOptions
}) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple,
    disabled,
    ...dropzoneOptions,
  });

  const isSingleFileSelected = !multiple && !!value && !Array.isArray(value);
  const hasError = isDragReject || !!error;
  const showFilesRejected = !hideFilesRejected && fileRejections.length > 0;
  const trans = useTranslate();

  const renderPlaceholder = () => (
    <PlaceholderContainer className={uploadClasses.placeholder.root}>
      <UploadIllustration hideBackground sx={{ width: 200 }} />
      <div className={uploadClasses.placeholder.content}>
        <div className={uploadClasses.placeholder.title}>Drop or select an image</div>
        <div className={uploadClasses.placeholder.description}>
          Drag a file here, or <span>browse</span> your device.
        </div>
      </div>
    </PlaceholderContainer>
  );
  const renderResult = () => (
    <AnalyticsWidgetSummary
      title="Report"
      maturity={result?.maturity_index}
      acidity={result?.predicted_acidity}
      note={result?.quality_note}
      recommendation={result?.harvest_recommendation}
      recommendationAr={result?.harvest_recommendation_arabic}
      harvest_recommendation_arabic
      color={result?.needs_alert ? 'primary' : 'error'}
      alertMessage={result?.needs_alert ? result?.alert_message : null}
      icon={<img alt="Messages" style={{ widht: 250, height: 250 }} src={logo} />}
    />
  );
  const renderSingleFileLoading = () => loading && !multiple && <SplashScreen />;

  const renderSingleFilePreview = () => isSingleFileSelected && <SingleFilePreview file={value} />;

  return (
    <UploadWrapper {...slotProps?.wrapper} className={uploadClasses.wrapper}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UploadArea
            {...getRootProps()}
            className={mergeClasses([uploadClasses.default, className], {
              [uploadClasses.state.dragActive]: isDragActive,
              [uploadClasses.state.disabled]: disabled,
              [uploadClasses.state.error]: hasError,
            })}
            sx={sx}
          >
            <input {...getInputProps()} />
            {isSingleFileSelected ? renderSingleFilePreview() : renderPlaceholder()}
            {isSingleFileSelected && (
              <DeleteButton size="small" onClick={onDelete}>
                <Iconify icon="mingcute:close-line" width={16} />
              </DeleteButton>
            )}
          </UploadArea>
          <SubmitContainer>
            <Tooltip title="Send">
              <Button variant="contained" color="primary" onClick={onClick}>
                {trans.t('generate')}
              </Button>
            </Tooltip>
          </SubmitContainer>

          {helperText && <FormHelperText error={!!error}>{helperText}</FormHelperText>}
          {showFilesRejected && (
            <RejectedFiles files={fileRejections} {...slotProps?.rejectedFiles} />
          )}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>{renderResult()}</Grid>
      </Grid>
      {renderSingleFileLoading()}
    </UploadWrapper>
  );
}
