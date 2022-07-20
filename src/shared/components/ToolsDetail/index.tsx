import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

interface IToolsDetail {
  newButtonText?: string
  showNewButton?: boolean
  showComeBackButton?: boolean
  showDeleteButton?: boolean
  showSaveButton?: boolean
  showSaveAndCloseButton?: boolean

  showNewButtonLoading?: boolean
  showComeBackButtonLoading?: boolean
  showDeleteButtonLoading?: boolean
  showSaveButtonLoading?: boolean
  showSaveAndCloseButtonLoading?: boolean

  clickNew?: () => void
  clickComeBack?: () => void
  clickDelete?: () => void
  clickSave?: () => void
  clickSaveComeBack?: () => void
}

export const ToolsDetail: React.FC<IToolsDetail> = ({
  newButtonText = 'Novo',
  showSaveButton = true,
  showSaveAndCloseButton = false,
  showDeleteButton = true,
  showNewButton = true,
  showComeBackButton = true,

  showSaveButtonLoading = false,
  showNewButtonLoading = false,
  showComeBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveAndCloseButtonLoading = false,

  clickNew,
  clickComeBack,
  clickDelete,
  clickSave,
  clickSaveComeBack,
}) => {
  const theme = useTheme()
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      display="flex"
      alignItems="center"
      padding={1}
      paddingX={2}
      marginX={1}
      gap={1}
    >
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          variant="contained"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={clickSave}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}
      {showSaveButtonLoading && (
        <Skeleton width={122} height={70} animation="wave" />
      )}

      {showSaveAndCloseButton &&
        !showSaveAndCloseButtonLoading &&
        !smDown &&
        !mdDown && (
          <Button
            variant="outlined"
            disableElevation
            startIcon={<Icon>save</Icon>}
            onClick={clickSaveComeBack}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e fechar
            </Typography>
          </Button>
        )}
      {showSaveAndCloseButtonLoading && !smDown && !mdDown && (
        <Skeleton width={180} height={70} animation="wave" />
      )}

      {showDeleteButton && !showDeleteButtonLoading && (
        <Button
          variant="outlined"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={clickDelete}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {showDeleteButtonLoading && (
        <Skeleton width={180} height={70} animation="wave" />
      )}

      {showNewButton && !showNewButtonLoading && !smDown && (
        <Button
          variant="outlined"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={clickNew}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {newButtonText}
          </Typography>
        </Button>
      )}
      {showNewButtonLoading && !smDown && (
        <Skeleton width={180} height={70} animation="wave" />
      )}

      {showComeBackButton &&
        (showNewButton ||
          showDeleteButton ||
          showSaveButton ||
          showSaveAndCloseButton) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {showComeBackButton && !showComeBackButtonLoading && (
        <Button
          variant="outlined"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={clickComeBack}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}
      {showComeBackButtonLoading && (
        <Skeleton width={180} height={70} animation="wave" />
      )}
    </Box>
  )
}
