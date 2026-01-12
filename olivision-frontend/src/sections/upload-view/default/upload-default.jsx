/** @format */

import { useDropzone } from 'react-dropzone';
import { mergeClasses } from 'minimal-shared/utils';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';

import logo from 'src/assets/logo.svg';
import { useTranslate } from 'src/locales';

import { SingleFilePreview } from 'src/components/upload';
import { SplashScreen } from 'src/components/loading-screen';

import { ReportBox } from '../report-box';
import { Iconify } from '../../../components/iconify';
import { uploadClasses } from '../../../components/upload/classes';
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
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    multiple,
    disabled,
    ...dropzoneOptions,
  });

  const isSingleFileSelected = !multiple && !!value && !Array.isArray(value);
  const hasError = isDragReject || !!error;
  const trans = useTranslate();

  const renderPlaceholder = () => (
    <PlaceholderContainer className={uploadClasses.placeholder.root}>
      <Iconify sx={{ color: 'primary.main' }} icon="mdi:tray-upload" width={60} />
      <div className={uploadClasses.placeholder.content}>
        <div className={uploadClasses.placeholder.title}>{trans.t('drog')}</div>
        <Typography color="text.secondary">{trans.t('drag')}</Typography>
        <Typography variant="caption" color="text.secondary">
          JPG, PNG, WEBP • Max 10MB
        </Typography>
      </div>
    </PlaceholderContainer>
  );
  const renderRightSide = () => (
    <ReportBox
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
      <Stack alignItems="center" spacing={1} mb={6}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Iconify icon="mdi:water-outline" sx={{ color: 'primary.main' }} width={42} />
          <Typography color="primary" variant="h3" fontWeight={700}>
            {trans.t('title')}
          </Typography>
        </Stack>
        <Typography color="text.secondary">{trans.t('subTitle')}</Typography>
      </Stack>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
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
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={3}>
            {renderRightSide()}
          </Grid>
        </Grid>
      </Grid>
      {renderSingleFileLoading()}
      <Typography
        sx={{
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          left: { xs: 0, md: '40%' },
        }}
        textAlign="center"
        color="text.secondary"
      >
        AI-powered analysis • Instant results • Professional accuracy
      </Typography>
    </UploadWrapper>
  );
}
